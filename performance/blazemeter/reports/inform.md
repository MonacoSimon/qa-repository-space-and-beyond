# Performance Analysis Report – BlazeMeter

## Objetivo

Evaluar el rendimiento del sistema bajo pruebas de carga utilizando BlazeMeter, analizando su capacidad de respuesta, estabilidad y procesamiento de solicitudes en un escenario de alta concurrencia.

---

## Métricas obtenidas

* Usuarios virtuales máximos: 50
* Throughput promedio: 6719.92 hits/segundo
* Tiempo de respuesta promedio: 6.98 ms
* Percentil 90 (P90): 6 ms
* Tasa de error: 0 %
* Ancho de banda promedio: 14.77 MiB/s

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo de respuesta promedio de 6.98 ms es extremadamente bajo, lo que indica una respuesta casi inmediata del sistema.

El percentil 90 (6 ms) confirma que la gran mayoría de las solicitudes se procesan en tiempos muy similares, mostrando una alta consistencia.

Esto sugiere:

* excelente performance
* baja latencia
* estabilidad en el procesamiento

---

### Throughput

El throughput de 6719.92 hits por segundo es muy alto, lo que indica que el sistema es capaz de procesar una gran cantidad de solicitudes simultáneamente.

Esto refleja:

* alta capacidad de procesamiento
* buena escalabilidad en este escenario

---

### Estabilidad

La tasa de error del 0 % indica que:

* todas las solicitudes fueron procesadas correctamente
* no se detectaron fallos bajo carga

Esto es un indicador claro de estabilidad del sistema.

---

### Uso de ancho de banda

El consumo de 14.77 MiB/s muestra que el sistema maneja un flujo constante de datos sin generar cuellos de botella visibles.

---

## Análisis general

El sistema presenta un rendimiento sobresaliente bajo una carga de 50 usuarios concurrentes en BlazeMeter.

Se observa:

* tiempos de respuesta extremadamente bajos
* alta capacidad de procesamiento
* ausencia total de errores
* comportamiento consistente en todas las métricas

Estos resultados indican que el sistema responde de forma eficiente en este entorno de prueba.

---

## Consideraciones

Los resultados obtenidos son significativamente mejores que los observados en pruebas locales con JMeter, lo que puede deberse a:

* diferencias en la infraestructura de ejecución
* optimización del entorno de BlazeMeter
* menor carga real del sistema bajo prueba

Por lo tanto, es importante interpretar estos resultados en contexto.

---

## Conclusión

El sistema demuestra una excelente capacidad de respuesta y estabilidad bajo carga en el entorno de BlazeMeter.

Sin embargo, se recomienda contrastar estos resultados con pruebas locales para obtener una visión más realista del comportamiento en entornos productivos.

En condiciones controladas, el sistema muestra un alto nivel de rendimiento y escalabilidad.
