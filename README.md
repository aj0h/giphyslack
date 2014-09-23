# giphyslack

giphy slack integration built in node.js

## How to use

Setup an outgoing webhook in you slack integrations.
The url that you link to should be the url where you are hosting this app.

![](https://s3-us-west-2.amazonaws.com/dotnodebucket/screen1.png)

The trigger word(s) can be anything you want it to be, in this example I use 'gif:'.

It is also set for all channels, you can set it for specific channel if you'd like.

Also, feel free to change the default webhook image and name!

This app doesn't rely on incoming webhooks, so you don't have to worry about tokens.
The gif is automatically returned to the outgoing webhook and displayed in the chat box.

## Enjoy

This app will return the first gif returned from the Giphy api.

Enjoy with your team.

![](https://s3-us-west-2.amazonaws.com/dotnodebucket/screen2.png)

