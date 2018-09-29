var gulp = require('flarum-gulp');

gulp({
  modules: {
    'extum/flarum-ext-sidenav': [
      'src/**/*.js',
    ]
  }
});
