## API Testing – Postman

### Descripción

Este módulo contiene pruebas de API realizadas con Postman sobre la aplicación web https://demo.testim.io.

El objetivo es validar la disponibilidad, estructura y comportamiento de los endpoints accesibles, teniendo en cuenta que la aplicación funciona como una SPA (Single Page Application) y no expone endpoints de backend tradicionales para todas sus funcionalidades.

---

### Alcance de pruebas

Se realizaron pruebas sobre los siguientes endpoints:

- `/` → página principal  
- `/login` → acceso a login  
- `/destinations` → listado de destinos  
- `/checkout` → proceso de compra  

Las validaciones incluyen:

- código de estado HTTP  
- tipo de contenido (HTML)  
- presencia de contenido esperado  
- tiempos de respuesta  
- integridad básica de la respuesta  

---

### Configuración

Se utiliza un environment con la siguiente variable:

- `baseUrl` → https://demo.testim.io/
