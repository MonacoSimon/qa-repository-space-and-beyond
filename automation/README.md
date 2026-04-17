## Cypress – Automatización E2E

### Descripción

Este módulo contiene pruebas automatizadas end-to-end desarrolladas con Cypress, enfocadas en validar los flujos principales de la aplicación web.

El objetivo es simular el comportamiento real de un usuario, verificando no solo la navegación, sino también la correcta respuesta del sistema ante distintas acciones.

---

### Alcance de pruebas

Se automatizaron los siguientes escenarios:

* Navegación inicial de la aplicación
* Selección y reserva de viajes
* Proceso de login
* Aplicación de cupones de descuento
* Personalización de viajes
* Validaciones de accesibilidad

---

### Estructura de pruebas

Los tests se organizan por funcionalidades:

* `index.cy.js` → validaciones iniciales de carga y navegación
* `book-travel.cy.js` → flujo de reserva de viajes
* `log-in.cy.js` → pruebas de autenticación
* `enter-discount-coupon.cy.js` → validación de aplicación de cupones
* `customize-journey.cy.js` → personalización del viaje
* `accesibility.cy.js` → pruebas de accesibilidad con axe

---

### Tipos de validaciones implementadas

Las pruebas incluyen:

* Validación de visibilidad de elementos
* Verificación de redirecciones
* Validación de cambios en el estado de la UI
* Comparación de valores (ej: precios antes y después de descuentos)
* Validaciones negativas (inputs inválidos, comportamiento inesperado)
* Pruebas de accesibilidad automatizadas

---

### Accesibilidad

Se integró `cypress-axe` para detectar problemas de accesibilidad como:

* errores en atributos ARIA
* problemas de contraste
* ausencia de labels en formularios

Los resultados permiten identificar mejoras necesarias para cumplir con buenas prácticas de accesibilidad.

---

### Ejecución de pruebas

Instalar dependencias:

```
npm install
```

Ejecutar Cypress en modo interactivo:

```
npx cypress open
```

Ejecutar en modo headless:

```
npx cypress run
```

---

### Buenas prácticas aplicadas

* Separación de tests por funcionalidades
* Uso de assertions para validar comportamiento real
* Evitar validaciones únicamente visuales
* Enfoque en flujos completos de usuario
* Integración de accesibilidad como parte del testing

---

### Conclusión

Las pruebas automatizadas permiten validar de forma consistente los flujos críticos de la aplicación, detectando fallos funcionales y problemas de accesibilidad.

Este enfoque mejora la confiabilidad del sistema y facilita la detección temprana de errores en cambios futuros.
