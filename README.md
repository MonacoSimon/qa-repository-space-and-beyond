## Descripción

Este proyecto consiste en la ejecución de pruebas integrales sobre la aplicación web Space & Beyond, cubriendo distintas áreas del testing de software con un enfoque práctico y profesional.

El objetivo es simular un flujo de trabajo real de QA, incluyendo diseño de casos de prueba, ejecución, detección de defectos, pruebas de rendimiento, validación de seguridad, accesibilidad y testing de APIs.

---

[Enlace de la pagina](https://demo.testim.io/)

## Alcance de pruebas

Se realizaron los siguientes tipos de testing:

* Testing funcional (manual)
* Testing de APIs (Postman)
* Reporte y gestión de bugs
* Testing de performance
* Testing de seguridad
* Testing de accesibilidad
* Automatización (Cypress)

---

## Herramientas utilizadas

* Postman – testing de APIs
* Cypress – automatización de pruebas E2E
* Apache JMeter – pruebas de carga
* BlazeMeter – validación externa
* OWASP ZAP – análisis de seguridad
* Lighthouse – análisis de performance y accesibilidad
* axe – testing de accesibilidad automatizado

---

## Estructura del proyecto

```bash
.
├── accesibility-testing
│   ├── axe
│   └── lighthouse
├── api-testing
│   └── postman
├── automation
│   ├── cypress
│   └── README.md
├── bug-reports
│   ├── bug-reports.ods
│   ├── evidence
│   └── jira
├── performance
│   ├── blazemeter
│   └── jmeter
├── security
│   ├── inform.md
│   └── zap-analysis
├── test-scenarios
│   └── casos-de-prueba.ods
├── conclusions
└── README.md

## Testing funcional

# Se diseñaron y ejecutaron casos de prueba cubriendo los principales flujos del sistema:

navegación entre secciones
selección de destinos
personalización de viajes
aplicación de cupones de descuento
login de usuario

## Se aplicaron técnicas de validación sobre:

flujos positivos
flujos negativos
comportamiento ante datos inválidos
Hallazgos relevantes
validaciones de formularios inconsistentes
comportamiento no esperado en aplicación de descuentos
falta de feedback claro ante errores de usuario
API Testing

# Se realizaron pruebas sobre endpoints utilizando Postman.

# Dado que la aplicación funciona como SPA (Single Page Application), no todos los endpoints representan APIs reales.

Validaciones implementadas
status codes
headers (Content-Type)
contenido HTML
tiempos de respuesta
integridad de la respuesta
Consideraciones
el login no expone un endpoint POST real
la lógica de autenticación es manejada en frontend
Postman se utiliza principalmente para validación de disponibilidad
Gestión de bugs

Se documentaron defectos siguiendo un flujo similar a Jira:

Estados:
Nuevo → En progreso → Resuelto → Cerrado

Cada bug incluye:

pasos de reproducción
resultado esperado vs actual
prioridad
evidencia
Testing de performance

Se ejecutaron pruebas de carga con distintos niveles:

20 usuarios concurrentes
50 usuarios concurrentes
80 usuarios concurrentes
100 usuarios concurrentes
Métricas analizadas
tiempo de respuesta promedio
percentiles (P90, P95, P99)
throughput
tasa de errores

BlazeMeter se utilizó como validación externa.

Testing de seguridad

Se analizaron vulnerabilidades utilizando OWASP ZAP:

configuraciones de CSP incorrectas
falta de cabeceras de seguridad
exposición de información del servidor
Testing de accesibilidad

Se evaluó la accesibilidad utilizando:

Lighthouse
axe
Hallazgos relevantes
problemas de contraste de colores
elementos sin labels asociados
uso incorrecto de atributos ARIA
problemas en la jerarquía de encabezados
Automatización

Se implementaron pruebas automatizadas con Cypress para:

navegación principal
login de usuario
selección de viajes
aplicación de cupones
validación de elementos UI
Conclusión

La aplicación cumple con los flujos principales de navegación y permite la interacción del usuario.

Sin embargo, presenta limitaciones importantes en:

validaciones de frontend
accesibilidad
configuración de seguridad
estabilidad en algunos flujos
Estado del proyecto
Testing funcional completado
API testing implementado
Bugs documentados
Performance evaluada
Seguridad analizada
Accesibilidad evaluada
Automatización implementada
Ejecución (API Testing)

Para ejecutar las pruebas de API con Postman:

Importar la colección desde /api-testing/postman/collections/
Importar el environment desde /api-testing/postman/environment/

Configurar la variable baseUrl con:

https://demo.testim.io
Ejecutar los requests o la colección
