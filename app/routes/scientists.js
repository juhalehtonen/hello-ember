import Route from '@ember/routing/route';

/**
 * In a route's model() method, you return whatever data you want to make
 * available to the template. If you need to fetch data asynchronously, the
 * model() method supports any library that uses JavaScript Promises.
 */
export default Route.extend({
  model() {
    return ['Marie Curie', 'Matt Damon', 'Albert Einstein'];
  }
});
