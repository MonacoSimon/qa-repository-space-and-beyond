## Conclusión final

La aplicación cumple con su objetivo principal y permite la navegación 
y ejecución de los flujos básicos, como la selección de destinos, 
registro de datos y simulación de compra.

Sin embargo, a lo largo del proceso de testing se identificaron 
diversas debilidades que impactan en la calidad general del sistema:

- dependencia fuerte del frontend sin validaciones claras desde backend 
- limitaciones para testeo de API debido a la ausencia de endpoints reales 
- problemas de accesibilidad (contraste, etiquetas, uso de ARIA) 
- inconsistencias en la validación de formularios 
- comportamiento no siempre predecible en ciertos flujos automatizados 

En términos de rendimiento, la aplicación responde de manera aceptable 
bajo condiciones normales, aunque presenta variaciones en los tiempos 
de carga que podrían afectar la experiencia del usuario.

Desde el punto de vista de seguridad, se detectaron configuraciones 
incompletas que aumentan la superficie de riesgo, especialmente en lo 
relacionado a cabeceras y políticas de protección.

Estos aspectos indican que, si bien la aplicación es funcional como demo, 
no cuenta con la robustez necesaria para un entorno productivo real.

El sistema resulta adecuado como entorno de pruebas o demostración, 
pero requiere mejoras en validaciones, accesibilidad, 
seguridad y estabilidad para garantizar una experiencia más confiable 
y consistente para el usuario final.

Se recomienda priorizar:

- mejoras en accesibilidad siguiendo estándares WCAG 
- implementación de validaciones más robustas 
- refuerzo de configuraciones de seguridad 
- optimización del rendimiento en carga inicial 

Esto permitiría elevar significativamente la calidad del sistema 
y su preparación para escenarios de uso más exigentes.
