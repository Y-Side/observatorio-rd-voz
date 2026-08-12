# Reporte RD

Build a polished, responsive PUBLIC HOMEPAGE for a civic-tech platform called Observatorio RD.

The platform is focused on electricity and potable water service issues in the Dominican Republic.

This homepage is the PUBLIC-FACING side of the project.

It must NOT look like the internal CRM/dashboard.

The primary purpose of this page is:

Explain what Observatorio RD is.

Allow citizens to send feedback about electricity or potable water service in their area.

Give the project a trustworthy, modern civic identity.

IMPORTANT TECHNICAL SCOPE

Build ONLY the frontend homepage.

Use:

React

TypeScript

Tailwind CSS

clean reusable components

Lucide icons if icons are needed

Do NOT add:

backend

Supabase

Firebase

database

authentication

API calls

user accounts

admin functionality

charts

dashboards

maps

AI visualizations

additional routes

Use static mock content only.

The feedback form should work only on the frontend:

validate required fields

show field errors when necessary

allow the user to submit

show a success toast or success message

reset the form after successful submission

Do NOT persist the submission anywhere.

BRAND

Name:

Observatorio RD

Concept:

A public platform where citizens can share their experience with electricity and potable water services in their communities.

The platform is inspired by a broader academic project that analyzes public perception and service-related trends in the Dominican Republic.

However, DO NOT make artificial intelligence the main focus of the homepage.

The homepage should focus on:

services + communities + citizen participation

VISUAL DIRECTION

Create a modern civic-tech visual identity.

The design should feel:

trustworthy

clean

modern

Dominican

public-facing

accessible

friendly

professional

It should look like a real public digital service, NOT like a university assignment.

Use a light visual theme.

Suggested palette:

Dark navy:
#0B1F33

Primary blue:
#176BCE

Water cyan:
#16A6C9

Electricity yellow:
#F4B740

Background:
#F6F8FA

White:
#FFFFFF

Main text:
#152232

Muted text:
#667085

Success:
#259C64

Warning:
#E6A23C

Use color carefully.

Electricity-related elements should use yellow accents.

Water-related elements should use blue/cyan accents.

Avoid excessive gradients.

Avoid glassmorphism.

Avoid futuristic AI styling.

Avoid stock dashboard aesthetics.

PAGE STRUCTURE

Create a homepage with approximately 5 main sections:

Header

Hero

Feedback form

How it works / Why participate

Footer

Keep the page focused.

Do not make it unnecessarily long.

1. HEADER

Create a clean top navigation bar.

Left:

Simple civic-style icon/logo.

Observatorio RD

Right navigation:

Inicio

Cómo funciona

Participa

Sobre el proyecto

Include one visually prominent button:

Enviar reporte

These links and button can scroll visually to sections or remain non-functional.

Do NOT create additional routes.

Desktop:

Use horizontal navigation.

Mobile:

Use a clean hamburger menu.

2. HERO

Create a visually attractive two-column hero.

Do NOT make it look like a SaaS startup landing page.

LEFT SIDE:

Small label:

SERVICIOS BÁSICOS · REPÚBLICA DOMINICANA

Large headline:

Tu experiencia también cuenta.

Supporting text:

“Comparte cómo está funcionando el servicio de electricidad o agua potable en tu comunidad y ayuda a identificar tendencias que puedan requerir atención.”

Primary button:

Compartir mi experiencia

Secondary text button:

Conocer el proyecto

Under the CTA show a small trust message:

“Tu reporte se utiliza únicamente como información de apoyo para este proyecto académico.”

RIGHT SIDE:

Create an original visual composition representing:

Dominican communities

electricity

potable water

citizen participation

Do NOT use generic stock photography.

Use a modern illustrated/data-inspired composition.

Possible visual elements:

simplified Dominican Republic silhouette

location pins

small house icons

lightning icon

water drop

citizen feedback cards

For example, small floating visual cards:

⚡ Electricidad
Servicio inestable

and

💧 Agua potable
Servicio normal

These are illustrative mock elements only.

3. MAIN FEEDBACK SECTION

This should be the most important functional section of the homepage.

Use a soft light background that visually separates it from the hero.

Two-column layout on desktop.

LEFT SIDE:

Small label:

PARTICIPA

Heading:

Cuéntanos cómo está el servicio en tu zona

Supporting text:

“Completa este formulario con tu experiencia reciente. No necesitas escribir un reporte técnico: solo dinos qué servicio utilizas, dónde estás y cómo ha sido tu experiencia.”

Add three small benefits or instructions with icons:

Toma menos de un minuto

No requiere crear una cuenta

Ayuda a identificar patrones por comunidad

Add a small privacy note:

“No incluyas información personal sensible.”

RIGHT SIDE:

Create a large white feedback form card.

Use strong spacing and excellent form design.

Title:

Enviar feedback

Subtitle:

“Comparte tu experiencia con un servicio básico.”

FORM FIELDS

Field 1 — Service

Label:

¿Sobre qué servicio quieres opinar?

Use two large selectable cards instead of a normal select.

Option 1:

⚡
Electricidad

Option 2:

💧
Agua potable

Only one can be selected.

Selected electricity option should use yellow accent.

Selected water option should use blue accent.

This field is required.

Field 2 — Location

Label:

Provincia

Use a select input.

Include realistic Dominican Republic mock options such as:

Distrito Nacional

Santo Domingo

Santiago

La Vega

San Cristóbal

San Pedro de Macorís

La Romana

Puerto Plata

Required.

Field 3 — Municipality / Area

Label:

Municipio o sector

Text input.

Placeholder:

“Ej. Santo Domingo Este”

Required.

Field 4 — Service experience

Label:

¿Cómo ha sido tu experiencia?

Create three selectable sentiment-style buttons/cards:

😕
Mala

😐
Regular

🙂
Buena

Use accessible labels.

Required.

Do NOT call these:

Negative / Neutral / Positive

The interface should use ordinary citizen-friendly language.

Field 5 — Situation

Label:

¿Qué ocurrió?

When electricity is selected, show options such as:

Interrupción del servicio

Servicio inestable

Bajo voltaje

Otro

When water is selected:

Falta de agua

Baja presión

Servicio irregular

Otro

This can be implemented with frontend conditional rendering.

Required.

Field 6 — Comment

Label:

Cuéntanos un poco más

Textarea.

Placeholder:

“Describe brevemente lo que has notado con el servicio...”

Show character counter.

Maximum:

500 characters.

This field can be optional.

Field 7 — Time

Label:

¿Cuándo ocurrió?

Use simple options:

Ahora

Hoy

Ayer

Otro momento reciente

Required.

Do NOT implement complex date functionality.

SUBMIT AREA

Before submit button show a small informational message:

“Este reporte no constituye una denuncia oficial ni confirma una avería. La información forma parte de un prototipo académico.”

Primary full-width button:

Enviar mi reporte

Use a send icon.

On successful frontend submission:

Show a polished success state or toast:

¡Gracias por participar!

“Tu reporte fue registrado correctamente en esta demostración.”

Then reset the form.

Do NOT actually save the information.

FORM VALIDATION

Implement basic frontend validation.

Required fields:

service

province

municipality/area

experience

situation

time

If the user submits without completing required data:

highlight the field

show a short inline validation message

do not use browser alert()

Example:

“Selecciona un servicio.”

Keep validation visually clean.

4. WHY PARTICIPATE / HOW IT WORKS

Create a section below the form.

Small label:

CÓMO FUNCIONA

Heading:

De una experiencia individual a una señal colectiva

Show three visual steps horizontally on desktop.

01 — Comparte

Icon representing message/report.

Cuéntanos tu experiencia

“Selecciona el servicio, tu zona y describe brevemente lo ocurrido.”

02 — Analizamos

Icon representing data or search.

Agrupamos la información

“Los reportes pueden utilizarse junto con otras fuentes para identificar patrones y tendencias.”

03 — Observamos

Location/signal icon.

Identificamos señales

“Los cambios repetidos pueden ayudar a señalar zonas que necesitan mayor atención.”

Connect the steps visually with subtle lines or arrows.

Do NOT add technical AI explanations here.

OPTIONAL SMALL INFO BLOCK

Below the steps create a small civic-information card.

Title:

Una señal no es una confirmación

Text:

“El aumento de reportes o comentarios sobre una zona puede indicar que algo merece atención, pero siempre debe verificarse utilizando información oficial.”

Use an information icon.

5. FOOTER

Create a dark navy footer.

Left:

Observatorio RD

Text:

“Proyecto académico sobre servicios básicos y participación ciudadana en República Dominicana.”

Middle:

Proyecto

Cómo funciona

Sobre nosotros

Metodología

Right:

Servicios

Electricidad

Agua potable

Add a clear notice:

Los datos y resultados utilizados en esta demostración son simulados.

Bottom:

Proyecto académico · República Dominicana · 2026

RESPONSIVE REQUIREMENTS

Desktop:

Maximum width around 1200–1280px

Large balanced hero

Two-column feedback section

Generous whitespace

Form should not become excessively wide

Tablet:

Reduce columns naturally

Maintain hierarchy

Mobile:

Single-column layout

Hero illustration moves below text

Feedback form fills available width

Electricity and water selection cards remain side-by-side if space allows

Large touch targets

Navigation becomes hamburger menu

Submit button stays prominent

Avoid horizontal scrolling

UX PRIORITIES

The most important action on the page is:

sending feedback

The visual hierarchy should therefore be:

Understand what Observatorio RD is

Understand that citizens can participate

Complete the feedback form

Understand what happens with that information

Do not distract the user with analytics.

Do not add charts.

Do not add statistics unless they are purely decorative and minimal.

Do not add login or registration.

Do not add dashboard navigation.

Do not expose any admin functionality.

The homepage must clearly feel like the PUBLIC side of the same product whose internal interface is a CRM/dashboard.

Focus heavily on:

polished UI

excellent spacing

good form UX

responsive design

consistent visual identity

citizen-friendly language

clear electricity vs water distinction

realistic product quality

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/449e1153-9400-4ee9-9ea8-daeb453cc128).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
