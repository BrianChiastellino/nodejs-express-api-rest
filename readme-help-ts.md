# Configuración de Proyecto Node.js con TypeScript

Esta guía explica cómo configurar un proyecto de Node.js usando TypeScript y detalla el propósito de cada paso.


### 1. Instalar TypeScript globalmente
Instalamos TypeScript de forma global para poder acceder al comando `tsc` (TypeScript Compiler) desde cualquier lugar. Este comando se usa para compilar archivos TypeScript a JavaScript.

```bash
npm install -g typescript
```

### 2. Inicializar TypeScript en el proyecto
El comando tsc --init genera un archivo tsconfig.json en el directorio del proyecto, que contiene la configuración del compilador TypeScript. Este archivo es importante porque permite personalizar la configuración de compilación, como el directorio de salida y las opciones del lenguaje.

```bash
tsc --init
```

### 3. Instalar ts-node-dev como dependencia de desarrollo
ts-node-dev es una herramienta que permite ejecutar código TypeScript directamente sin necesidad de compilarlo manualmente cada vez. También reinicia automáticamente el servidor cuando se detectan cambios en los archivos, facilitando el desarrollo.

```bash
npm install ts-node-dev --save-dev
```

### 4. Agregar scripts en package.json
Para simplificar la ejecución de tareas comunes, añadimos scripts en el archivo package.json. Estos scripts permiten ejecutar comandos con facilidad:

dev: Ejecuta ts-node-dev para iniciar el proyecto en modo desarrollo, recompilando automáticamente cada vez que haya cambios en los archivos.
build: Ejecuta tsc para compilar el proyecto y generar archivos JavaScript en una carpeta build.
start: Ejecuta el archivo compilado en la carpeta build usando Node.js.

```bash
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts",
  "build": "tsc",
  "start": "node build/index.js"
}
```

### 5. Instalar tipos para dependencias (ej. express)
Al usar TypeScript, necesitamos definiciones de tipo para nuestras dependencias para aprovechar las verificaciones de tipos. Estas definiciones están disponibles como paquetes separados (prefijo @types). Por ejemplo, si usamos express, instalamos sus tipos de la siguiente manera:

```bash
npm install express
npm install @types/express --save-dev
```

### Comandos para Ejecutar el Proyecto

Modo desarrollo: Ejecuta el proyecto en modo desarrollo con recarga automática.
```bash
npm run dev
```

Compila el código TypeScript en JavaScript y coloca los archivos en el directorio build.
```bash
npm run build
```

Ejecutar código compilado: Inicia el proyecto ejecutando el archivo JavaScript compilado en build.
```bash
npm start
```

