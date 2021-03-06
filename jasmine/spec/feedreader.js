/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeTruthy();
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('elements URLs are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('elements URLs are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });


    /* Test suite named "The menu" */
    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(document.body.className).toContain('menu-hidden');
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. The test
         * has two expectations: that the menu display when
         * clicked and it hides when clicked again.
         */
        it('visibility on and off', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(document.body.className).not.toContain('menu-hidden');
            menuIcon.click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('non zero', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous.
         */
        var entriesBeforeNewFeed;
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        describe('save old feed and load new feed', function() {
          beforeEach(function(done) {
              entriesBeforeNewFeed = $('.feed .entry');
              loadFeed(2, done);
          });

          it('different than pervious feed', function() {
              var entriesAfterNewFeed = $('.feed .entry');
              expect(entriesBeforeNewFeed.length).toBeGreaterThan(0);
              expect(entriesAfterNewFeed.length).toBeGreaterThan(0);
              expect(entriesBeforeNewFeed[0].innerText.trim()).not.toBe(entriesAfterNewFeed[0].innerText.trim());
          });
        });
    });
}());
