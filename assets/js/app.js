/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

 import '../scss/app.scss';

 const imagesContext = require.context('../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
imagesContext.keys().forEach(imagesContext);