Controle Financeiro

Objetivo desde app é dar o poder de controlar sua vida financeira e lhe educar financeiramente.

#como rodar ios?

* adicionar o capacitor em seu projeto -> Ionic integrations enable capacitor 
* adicionar a plataforma que deseja (ios/android) -> ionic capacitor add ios
* contruir o aplicativo -> ionic build
* sincronizar código com o Capacitor -> ionic capacitor sync
* ionic capacitor open iosß


#Como gerar splash screens?
* npm install @capacitor/assets --save-dev
  src/
  node_modules
  resources/
  |--icon-only.png 1024px x 1024px
  |--icon-foregroung.png 1024px x 1024px
  |--icon-background.png 1024px x 1024px
  |--splash.png 2732px x 2732px
  |--splash-dark.png 2732px x 2732px

  * icon files devera ter o tamanho 1024px x 1024px
  * Splash files deve ter o tamanho 2732px x 2732pxx
  * the format can be jpg or png


* npx capacitor-assets generate
