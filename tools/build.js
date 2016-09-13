//Allowing Console Calls
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';
console.log('Generating minified bundle.');

webpack(webpackConfig).run((err, stats) => {
  if(err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.log('Webpack generated the following errors.'.bold.red);
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings.'.bold.yellow);
    return jsonStats.warnings.map(warning => console.log(warning.yellow));
  }
  console.log(`Webpack stats: ${stats}`);

  console.log('Build suceededand written to /build.'.bold.green);

  return 0;
});
