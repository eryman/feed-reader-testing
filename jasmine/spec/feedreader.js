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
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a url', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url.substring(0,4)).toEqual("http");
            })
        })


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have a name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* Create variables "bodyClassName" and "menushowing" 
         * Use beforeEach function to set bodyClassName to contain class name of body
         * and set menuShowing to false
         * (If body has class "menu-hidden," the menu will be hidden)
         */
        var bodyClassName, menuShowing;
        beforeEach(function(){
            bodyClassName = $('body')[0].className;
            menuShowing = false;
        })
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('elements are hidden', function(){
            expect(bodyClassName).toEqual('menu-hidden');
        })
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('hides / displays when clicked', function(){
            // sets 'menu-icon-link' to variable 'menuIcon'
            var menuIcon = $('.menu-icon-link');

            // Triggers a click event, checks to see if class name has been removed
            menuIcon.trigger('click');
            bodyClassName = $('body')[0].className;
            expect(bodyClassName).toEqual('');

            // Triggers a click event, checks to see if class name has been returned
            menuIcon.trigger('click');
            bodyClassName = $('body')[0].className;
            expect(bodyClassName).toEqual('menu-hidden');
        })
    })
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        var entriesLength;
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(0, function(){
                entriesLength = document.getElementsByClassName('entry').length;
                done();
            })
        });

        it('loads properly', function(done){
            //expect the number of .entry elements to be greater than 1
            expect(entriesLength).toBeGreaterThan(0);
            done();
        })
    });

    //})
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function(){
        var originFeed, newFeed;
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done){
            // get current text from feed container, store in variable originFeed
            loadFeed(0, function(){
                originFeed = $('.feed').children().text();
                console.log(originFeed);
            })
            // Get new text from current feed container, store in variable newFeed
            loadFeed(1, function(){
                newFeed = $('.feed').children().text();
                done();
            })
        })
        it('loads properly when clicked', function(done){
            // Check to make sure originFeed and newFeed have content
            if (originFeed === '' || newFeed === ''){
                window.alert('Could not access RSS Feeds')
            }
            // else, compare both variables - if they are different, test passes 
            else {
                expect(originFeed).not.toEqual(newFeed);
            }
            done();
        })
    })
}());
