# Lighthouse Analysis Report

## Objetivo

Evaluar la calidad de la aplicación web mediante el análisis automatizado de Lighthouse, enfocándose en métricas de performance, accesibilidad, buenas prácticas y SEO.

---

## Resumen general

El análisis muestra un rendimiento moderado y múltiples oportunidades de mejora, principalmente en:

* performance (tiempos de carga elevados)
* accesibilidad (problemas estructurales y semánticos)
* SEO (errores críticos en robots.txt)

La aplicación es funcional, pero presenta limitaciones que impactan en la experiencia del usuario y en su visibilidad.

---

## Performance

### Métricas obtenidas

* First Contentful Paint (FCP): 4.7 s
* Largest Contentful Paint (LCP): 6.4 s
* Total Blocking Time (TBT): 200 ms
* Cumulative Layout Shift (CLS): 0.045
* Speed Index: 4.7 s

### Análisis

Los tiempos de carga son elevados, especialmente:

* LCP (6.4 s) → indica carga lenta del contenido principal
* FCP (4.7 s) → el usuario tarda en ver contenido inicial

El TBT se mantiene en valores aceptables, lo que indica que el bloqueo del hilo principal no es crítico.

El CLS es bajo, lo cual es positivo ya que no hay cambios bruscos en el layout.

### Impacto

* percepción de lentitud
* posible abandono del usuario
* impacto negativo en SEO

### Recomendaciones

* optimizar carga de recursos (imágenes, scripts)
* reducir tamaño de archivos
* implementar carga diferida (lazy loading)
* minimizar dependencias externas

---

## Accesibilidad

### Score: 70

Se detectaron múltiples problemas relevantes:

---

### Problemas de ARIA

* atributos `aria-*` incorrectos
* valores de `role` inválidos

**Impacto:**
Los lectores de pantalla pueden interpretar incorrectamente los elementos.

---

### Problemas en formularios

* inputs sin label asociado

**Impacto:**
Usuarios con asistencia no pueden identificar correctamente los campos.

---

### Contraste de colores

* contraste insuficiente entre texto y fondo

**Impacto:**
Dificulta la lectura, especialmente para personas con discapacidad visual.

---

### Navegación y estructura

* headings desordenados (no siguen jerarquía correcta)

**Impacto:**
Complica la navegación por teclado y lectores de pantalla.

---

### Buenas prácticas

* uso de `user-scalable="no"` en viewport

**Impacto:**
Impide hacer zoom, afectando accesibilidad en dispositivos móviles.

---

### Análisis general

La aplicación presenta problemas básicos de accesibilidad que afectan:

* usabilidad
* inclusión
* cumplimiento de estándares (WCAG)

---

### Recomendaciones

* corregir atributos ARIA
* agregar labels a todos los inputs
* mejorar contraste de colores
* estructurar correctamente los headings
* permitir zoom en dispositivos móviles

---

## Best Practices

Se detectaron áreas de mejora relacionadas con seguridad y configuración:

* CSP no implementada correctamente
* falta de aislamiento de origen (COOP)
* posibles riesgos de XSS

También se identificó:

* ausencia de source maps en JavaScript

**Impacto:**

* mayor dificultad para debugging
* posibles riesgos de seguridad

---

## SEO

### Score: 91

Aunque el score es alto, se detectó un problema crítico:

---

### robots.txt inválido

* 29 errores encontrados

**Impacto:**

* los motores de búsqueda podrían no indexar correctamente la aplicación

---

### Recomendaciones

* corregir el archivo robots.txt
* validar reglas de acceso para crawlers

---

## Análisis general

La aplicación presenta un estado funcional aceptable, pero con múltiples áreas de mejora:

* performance limitada
* accesibilidad incompleta
* configuración técnica mejorable

Estos problemas afectan tanto la experiencia del usuario como la calidad técnica del sistema.

---

## Conclusión

El sistema no presenta fallos críticos, pero sí varias deficiencias que impactan directamente en:

* tiempos de carga
* accesibilidad para usuarios con discapacidad
* visibilidad en motores de búsqueda

Se recomienda priorizar la optimización de performance y la corrección de problemas de accesibilidad, ya que estos tienen un impacto directo en la experiencia del usuario final.
