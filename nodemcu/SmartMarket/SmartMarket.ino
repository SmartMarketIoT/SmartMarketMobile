// Import libs
#include <SPI.h>
#include <MFRC522.h>
#include <ESP8266WiFi.h> 
#include <ESP8266HTTPClient.h>

// NodeMcu port config
#define SS_PIN 2 // D4 -> NodeMcu
#define RST_PIN 0 // D3 -> NodeMcu

// Network config
const char* helixHttp = "<server-ip>:1026/v2";
const char* helixMqqt = "<server-ip>:4041";

// Device config
const char* deviceId = "urn:ngsi-ld:sensor:001";

// Wifi Config
const char* ssid = "<wifi-name>"; 
const char* password = "<wifi-password>";

// Global variables
bool readProducts = true; 
char* purchaseId;
byte nuidPICC[4]; // actual NUID 

// RFID sensor config
MFRC522 rfid(SS_PIN, RST_PIN); // Instance of the class

MFRC522::MIFARE_Key key; 

WiFiClient espClient;
HTTPClient http;

void setup() { 
  Serial.begin(9600);
  Serial.flush();
  //RFID
  SPI.begin(); // Init SPI bus
  rfid.PCD_Init(); // Init MFRC522 

  //Wi-Fi access
  WiFi.begin(ssid, password);

  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }

  Serial.println("Connected WiFi network!");
  delay(2000);
  

  Serial.println(F("RFID Connected!"));
  Serial.print(F("Using the following key:"));
  printHex(key.keyByte, MFRC522::MF_KEY_SIZE);
}
 
void loop() {
  
  if(readProducts){
    readProduct();
  }
}

void readProduct(){
  // Reset the loop if no new card present on the sensor/reader. This saves the entire process when idle.
  if ( ! rfid.PICC_IsNewCardPresent())
    return;

  // Verify if the NUID has been readed
  if ( ! rfid.PICC_ReadCardSerial())
    return;

  Serial.print(F("PICC type: "));
  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
  Serial.println(rfid.PICC_GetTypeName(piccType));

  // Check is the PICC of Classic MIFARE type
  if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&  
    piccType != MFRC522::PICC_TYPE_MIFARE_1K &&
    piccType != MFRC522::PICC_TYPE_MIFARE_4K) {
    Serial.println(F("Your tag is not of type MIFARE Classic."));
    return;
  }

  if (rfid.uid.uidByte[0] != nuidPICC[0] || 
    rfid.uid.uidByte[1] != nuidPICC[1] || 
    rfid.uid.uidByte[2] != nuidPICC[2] || 
    rfid.uid.uidByte[3] != nuidPICC[3] ) {
    Serial.println(F("A new card has been detected."));
    
    putItemPurchase("urn:ngsi-ld:InventoryItem:003", "urn:ngsi-ld:Product:001", "urn:ngsi-ld:Purchase:001");

    
    // Store NUID into nuidPICC array
    for (byte i = 0; i < 4; i++) {
      nuidPICC[i] = rfid.uid.uidByte[i];
    }
   
    Serial.println(F("The NUID tag is:"));
    Serial.print(F("In hex: "));
    printHex(rfid.uid.uidByte, rfid.uid.size);
    Serial.println();
    Serial.print(F("In dec: "));
    Serial.println();
  }
  else Serial.println(F("Card read previously."));

  // Halt PICC
  rfid.PICC_HaltA();

  // Stop encryption on PCD
  rfid.PCD_StopCrypto1();
}

/**
 * Helper routine to dump a byte array as hex values to Serial. 
 */
void printHex(byte *buffer, byte bufferSize) {
  for (byte i = 0; i < bufferSize; i++) {
    Serial.print(buffer[i] < 0x10 ? " 0" : " ");
    Serial.print(buffer[i], HEX);
  }
}

void putItemPurchase(String entitieName, String productId, String purchaseId) {
    String bodyRequest = "{\"id\": \"" + entitieName + "\", \"type\": \"InventoryItem\", \"refProduct\": { \"value\": \"" + productId + "\", \"type\": \"Relationship\"},\"refPurchase\": { \"value\": \"" + purchaseId + "\", \"type\": \"Relationship\"}}";
    httpRequest("/entities", bodyRequest);
}

//request
void httpRequest(String path, String data)
{
  String payload = makeRequest(path, data);

  if (!payload) {
    return;
  }

  Serial.println("##[RESULT]## ==> " + payload);

}

//request
String makeRequest(String path, String bodyRequest)
{
  String fullAddress = "http://" + String(helixHttp) + path;
  http.begin(fullAddress);
  Serial.println("Orion URI request: " + fullAddress);

  http.addHeader("Content-Type", "application/json"); 
  http.addHeader("Accept", "application/json"); 
  http.addHeader("fiware-service", "helixiot"); 
  http.addHeader("fiware-servicepath", "/"); 

Serial.println(bodyRequest);
  int httpCode = http.POST(bodyRequest);

  String response =  http.getString();

  Serial.println("HTTP CODE");
  Serial.println(httpCode);
  
  if (httpCode < 0) {
    Serial.println("request error - " + httpCode);
    return "";
  }

  if (httpCode != HTTP_CODE_OK) {
    return "";
  }

  http.end();

  return response;
}
