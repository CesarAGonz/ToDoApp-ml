# TODO APP

## Instalación de Dependencias

Primero, instala las dependencias del proyecto:

```bash
yarn install
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

```
# Ejemplo de variables de entorno
DATABASE_URL=<tu_url_de_base_de_datos>
JWT_SECRET=<tu_secreto_jwt>
```

## Ejecución en Local

### 1. Compila el Proyecto TypeScript:

```bash
yarn build
```

### 2. Inicia el Servidor:

```bash
yarn start
```

El servidor estará corriendo en `http://localhost:4000`.

## Rutas de la API

### Ruta de Bienvenida

**Hello World**

- **URL**: `/`
- **Método**: `GET`
- **Descripción**: Devuelve un mensaje "Hello World".
- **Respuesta**:
  ```json
  {
    "message": "Hello World"
  }
  ```

### Autenticación

#### Registro de Usuario

- **URL**: `/api/auth/register`
- **Método**: `POST`
- **Descripción**: Registra un nuevo usuario.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "email": "usuario@example.com",
    "password": "contraseña123"
  }
  ```
- **Respuesta**:
  ```json
  {
    "message": "Usuario registrado exitosamente"
  }
  ```

#### Inicio de Sesión

- **URL**: `/api/auth/login`
- **Método**: `POST`
- **Descripción**: Inicia sesión un usuario.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "email": "usuario@example.com",
    "password": "contraseña123"
  }
  ```
- **Respuesta**:
  ```json
  {
    "token": "jwt_token_generado"
  }
  ```

### Tareas

#### Obtener Todas las Tareas

- **URL**: `/api/tasks`
- **Método**: `GET`
- **Descripción**: Obtiene todas las tareas del usuario autenticado.
- **Encabezados**:
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Respuesta**:
  ```json
  [
    {
      "id": 1,
      "title": "Mi primera tarea",
      "completed": false
    }
  ]
  ```

#### Crear una Nueva Tarea

- **URL**: `/api/tasks`
- **Método**: `POST`
- **Descripción**: Crea una nueva tarea.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "title": "Nueva tarea"
  }
  ```
- **Encabezados**:
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 1,
    "title": "Nueva tarea",
    "completed": false
  }
  ```

#### Actualizar una Tarea

- **URL**: `/api/tasks/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza una tarea existente.
- **Cuerpo de la Solicitud**:
  ```json
  {
    "title": "Tarea actualizada",
    "completed": true
  }
  ```
- **Encabezados**:
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Respuesta**:
  ```json
  {
    "id": 1,
    "title": "Tarea actualizada",
    "completed": true
  }
  ```

#### Eliminar una Tarea

- **URL**: `/api/tasks/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina una tarea existente.
- **Encabezados**:
  ```json
  {
    "Authorization": "Bearer jwt_token"
  }
  ```
- **Respuesta**:
  ```json
  {
    "message": "Tarea eliminada exitosamente"
  }
  ```

## Despliegue

### Desplegar el Proyecto en Vercel

1. Instala la CLI de Vercel:

```bash
npm i -g vercel
```

2. Inicia sesión en Vercel:

```bash
vercel login
```

3. Despliega el proyecto:

```bash
vercel
```

### Para Desplegar a Producción:

```bash
vercel --prod
```

Con estos pasos, deberías poder ejecutar y desplegar tu aplicación de tareas sin problemas.
