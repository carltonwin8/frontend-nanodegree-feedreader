# Frontend Nanodegree Feedreader

The original readme before this repo was forked can be seen [here](readme_ori.md).

## To Run Tests
Clone or download this repo and open index.html in a browser and note the
Jasmine test output at the end of the web page.

## Test Summary

The following conditions are tested during the Jasmine tests.

 - Test the `allFeeds` object and ensures the URL and name are defined.
 - Test menu element is hidden by default and changes visibility when the
   menu icon is clicked.
 - Test the `loadFeed` function works and has at least a single `.entry`
   element within the `.feed` container.
 - Test a new feed is loaded by the `loadFeed` function and that the content
   changes.
