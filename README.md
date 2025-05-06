# 📦 POSTMAIL API

API CREADA Y DISEÑADA PARA EL PARCIAL II DE POO

## 🛠 Tecnologías usadas

- Node.js
- Express
- MongoDB + Mongoose
- Dotenv
- Thunder Client para pruebas

---

## 📁 Estructura de carpetas

```
├── models/
│   ├── Cliente.js
│   ├── Envio.js
│   └── Producto.js
├── services/
│   ├── dataBase.js
│   └── envioService.js
├── .env
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Instalación

1. Instala las dependencias:

```bash
npm init -y
npm install express mongoose dotenv

```

2. Crea un archivo `.env` en la raíz del proyecto con este contenido:

```
PORT = 3000
MONGO_URI = mongodb+srv://carlosgranados2309:9kaEkHNUtHxvg0qm@proyect.mx6w4jg.mongodb.net/?retryWrites=true&w=majority&appName=PROYECT
```

3. Inicia el servidor:

```bash
node app.js
```

---

## 📬 Endpoints disponibles

| Método | Ruta                            | Descripción                                       |
|--------|----------------------------------|---------------------------------------------------|
| POST   | `/api/cliente`                  | Registrar cliente con créditos (según plan)       |
| GET    | `/api/clientes`                 | Obtener lista de todos los clientes               |
| GET    | `/api/creditos/:clienteId`      | Ver créditos de un cliente                        |
| POST   | `/api/producto`                 | Registrar un producto                             |
| POST   | `/api/envio`                    | Registrar un envío (y descontar créditos)         |
| GET    | `/api/envios/:clienteId`        | Ver envíos asociados a un cliente                 |
| DELETE | `/api/envio/:envioId`           | Eliminar un envío y reembolsar créditos al cliente|

---

## 📌 Ejemplos de Uso de la API (Thunder Client / Postman)

### ✅ 1. Registrar cliente con créditos

**Método:** `POST`  
**URL:** `http://localhost:3000/api/cliente`

**Body (JSON):**
```json
{
  "nombre": "Juan Pérez",
  "plan": 2
}
```

---

### 📋 2. Listar todos los clientes

**Método:** `GET`  
**URL:** `http://localhost:3000/api/clientes`

_No requiere body._

---

### 📦 3. Registrar producto

**Método:** `POST`  
**URL:** `http://localhost:3000/api/producto`

**Body (JSON):**
```json
{
  "descripcion": "Caja de libros",
  "peso": 12,
  "bultos": 3,
  "fechaEntrega": "2025-05-07T00:00:00.000Z"
}
```

---

### 📬 4. Registrar un envío

**Método:** `POST`  
**URL:** `http://localhost:3000/api/envio`

**Body (JSON):**
```json
{
  "clienteId": "68195f05aebe270f2d8ccf29",
  "productoId": "68195fbeaebe270f2d8ccf31",
  "nombre": "Juan Pérez",
  "direccion": "Calle 45 #23-10, Bogotá",
  "telefono": "3001234567",
  "referencia": "Apartamento 202",
  "observacion": "Entregar entre 8am y 12pm"
}
```

_Nota: Los datos registrados en `clienteId` y `productoId` son valores de los registros del cliente y el producto preeviamente registrados._

---

### 💳 5. Ver créditos disponibles de un cliente

**Método:** `GET`  
**URL:** `http://localhost:3000/api/creditos/68195f05aebe270f2d8ccf29`

_Reemplaza el ID por uno válido, en este caso se usa el id de "Juan Perez"._

---

### 📦 6. Ver envíos de un cliente

**Método:** `GET`  
**URL:** `http://localhost:3000/api/envios/68195f05aebe270f2d8ccf29`

_Reemplaza el ID por uno válido en este caso se usa el id de "Juan Perez" de neuvo._

---

### ❌ 7. Eliminar un envío

**Método:** `DELETE`  
**URL:** `http://localhost:3000/api/envio/68195fdbaebe270f2d8ccf36`

_Reemplaza el ID de envio por uno válido, seguimos usando el de "Juan Perez" xd._

---

## 🧪 Pruebas con Thunder Client

Se incluye una colección de pruebas lista para importar:

📥 [Descargar colección Thunder Client](https://drive.google.com/uc?export=download&id=1EElEtNIMrOuewiVzesWDfvHuYX7tIyQi
)

### Cómo importarla:

1. Abre **Thunder Client** en VS Code.
2. Ve a la pestaña **Collections**.
3. Haz clic en los 3 puntos `⋮` > `Import`.
4. Selecciona el archivo `.json` descargado.

Contiene pruebas listas para:

- Crear cliente por plan (1, 2 y 3).
- Registrar productos.
- Registrar envíos.
- Consultar créditos y envíos.
- Eliminar envíos.

---

## ✅ Notas importantes

- El costo de envío se calcula como `peso / 3` redondeado hacia arriba.
- Al eliminar un envío, se reembolsan los créditos al cliente.