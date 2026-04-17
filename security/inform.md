# Security Analysis Report – Space & Beyond

## Objetivo

Evaluar la seguridad de la aplicación web Space & Beyond mediante análisis automatizado utilizando OWASP ZAP, con el fin de identificar vulnerabilidades y configuraciones inseguras.

---

## Resumen de hallazgos

Se detectaron múltiples vulnerabilidades de severidad media y baja, principalmente relacionadas con configuraciones incorrectas de políticas de seguridad y exposición de información.

No se identificaron vulnerabilidades críticas, pero las debilidades encontradas incrementan la superficie de ataque y podrían ser explotadas en escenarios reales.

---

## Vulnerabilidades detectadas

### 1. Configuración incorrecta de Content Security Policy (CSP)

* Riesgo: Medio
* Confianza: Alta

**Descripción:**
Se detectaron múltiples problemas en la configuración de la política CSP:

* uso de comodines (wildcard)
* ausencia de directivas con fallback
* uso de `unsafe-inline` en scripts y estilos

**Impacto:**
Estas configuraciones reducen significativamente la efectividad de la CSP, permitiendo la ejecución de código no confiable y aumentando el riesgo de ataques XSS.

**Recomendación:**
Definir políticas CSP restrictivas, evitando comodines y eliminando el uso de `unsafe-inline`.

---

### 2. Falta de integridad en recursos externos (SRI)

* Riesgo: Medio
* Confianza: Alta

**Descripción:**
Los recursos externos (scripts y hojas de estilo) no cuentan con atributos de integridad (Subresource Integrity).

**Impacto:**
Un atacante podría modificar recursos externos comprometidos sin que el navegador detecte la alteración.

**Recomendación:**
Implementar atributos `integrity` y `crossorigin` en los recursos externos.

---

### 3. Configuración incorrecta Cross-Domain

* Riesgo: Medio
* Confianza: Media

**Descripción:**
Se detectaron configuraciones permisivas en políticas cross-domain.

**Impacto:**
Podría permitir accesos no autorizados entre dominios, exponiendo información o funcionalidades.

**Recomendación:**
Restringir el acceso cross-domain solo a dominios confiables.

---

## Vulnerabilidades de bajo riesgo

### Divulgación de información del servidor

* El encabezado `Server` expone información sobre la tecnología utilizada.

**Impacto:**
Facilita la identificación del stack tecnológico por parte de un atacante.

**Recomendación:**
Ocultar o modificar los headers que revelan información del servidor.

---

### Falta de cabecera Strict-Transport-Security (HSTS)

* Riesgo: Bajo

**Descripción:**
No se encontró la cabecera HSTS en las respuestas HTTP.

**Impacto:**
Los usuarios podrían ser vulnerables a ataques de tipo downgrade o interceptación.

**Recomendación:**
Implementar `Strict-Transport-Security` para forzar conexiones seguras.

---

## Hallazgos informativos

* Aplicación clasificada como web moderna
* Presencia de comentarios potencialmente sensibles en el código
* Respuestas almacenadas en caché detectadas
* Configuración de control de caché mejorable

---

## Análisis general

La aplicación presenta debilidades principalmente en la configuración de políticas de seguridad y control de recursos.

Los problemas más relevantes están relacionados con:

* implementación incorrecta de CSP
* falta de validación de integridad de recursos
* exposición innecesaria de información

Esto indica una falta de endurecimiento (hardening) en la configuración de seguridad.

---

## Recomendaciones generales

* Definir políticas CSP estrictas y sin uso de `unsafe-inline`
* Implementar Subresource Integrity en todos los recursos externos
* Configurar correctamente políticas cross-domain
* Ocultar información sensible en headers HTTP
* Implementar HSTS para asegurar comunicaciones HTTPS
* Revisar configuraciones de caché y comentarios en código

---

## Conclusión

La aplicación no presenta vulnerabilidades críticas, pero sí múltiples configuraciones inseguras que reducen su nivel de protección.

Las debilidades detectadas podrían ser utilizadas como vectores de ataque en combinación con otras vulnerabilidades, por lo que se recomienda reforzar las políticas de seguridad y mejorar la configuración general del sistema.
