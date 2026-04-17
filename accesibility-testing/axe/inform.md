# Accessibility Analysis Report

## Objetivo

Evaluar la accesibilidad de la aplicación web mediante testing automatizado utilizando axe integrado con Cypress, con el fin de identificar problemas que puedan afectar a usuarios con discapacidades y tecnologías asistivas.

---

## Resumen de hallazgos

Se detectaron múltiples violaciones de accesibilidad correspondientes a distintas categorías, principalmente relacionadas con:

* uso incorrecto de atributos ARIA
* problemas de contraste visual
* ausencia de etiquetas en formularios

Estas fallas impactan directamente en la usabilidad y en la experiencia de usuarios que dependen de lectores de pantalla u otras herramientas de asistencia.

---

## Violaciones detectadas

### 1. Uso incorrecto de atributos ARIA

* Tipo: `aria-allowed-attr`
* Severidad: Media

**Descripción:**
Se identificaron atributos ARIA aplicados en elementos que no soportan dichos atributos.

**Impacto:**
Los lectores de pantalla pueden interpretar incorrectamente los elementos, generando confusión en la navegación.

**Recomendación:**
Utilizar únicamente atributos ARIA válidos según el tipo de elemento HTML.

---

### 2. Roles ARIA inválidos

* Tipo: `aria-roles`
* Severidad: Media

**Descripción:**
Se detectaron roles ARIA mal definidos o no válidos en varios elementos.

**Impacto:**
Afecta la interpretación de la estructura de la página por parte de tecnologías asistivas.

**Recomendación:**
Definir roles ARIA válidos y acordes a la semántica del contenido.

---

### 3. Problemas de contraste

* Tipo: `color-contrast`
* Severidad: Alta

**Descripción:**
Se detectaron múltiples elementos con contraste insuficiente entre texto y fondo.

**Impacto:**
Dificulta la lectura del contenido, especialmente para personas con discapacidad visual o baja visión.

**Recomendación:**
Ajustar los colores para cumplir con los estándares mínimos de contraste definidos por WCAG.

---

### 4. Campos de formulario sin label

* Tipo: `label`
* Severidad: Alta

**Descripción:**
Se identificaron campos de formulario sin etiquetas asociadas.

**Impacto:**
Usuarios que utilizan lectores de pantalla no pueden identificar el propósito de los campos, afectando la interacción con el formulario.

**Recomendación:**
Agregar etiquetas `<label>` correctamente asociadas a cada campo de entrada.

---

## Análisis general

La aplicación presenta problemas de accesibilidad que afectan tanto la interpretación del contenido como la interacción con elementos clave, especialmente formularios.

La mayoría de los problemas detectados corresponden a:

* falta de semántica adecuada
* implementación incorrecta de estándares ARIA
* deficiencias en la presentación visual

Estos factores reducen la accesibilidad del sistema y pueden excluir a ciertos usuarios.

---

## Recomendaciones generales

* Implementar correctamente atributos y roles ARIA
* Asegurar contraste adecuado en todos los elementos visuales
* Asociar etiquetas a todos los campos de formulario
* Complementar el testing automatizado con pruebas manuales

---

## Conclusión

El sistema presenta múltiples oportunidades de mejora en accesibilidad que impactan directamente en la experiencia del usuario.

Si bien las fallas detectadas no impiden completamente el uso de la aplicación, sí representan barreras significativas para usuarios con discapacidades.

Se recomienda priorizar la corrección de problemas relacionados con formularios y contraste visual, ya que tienen un impacto más directo en la interacción del usuario.
