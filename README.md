# giphyslack

giphy slack integration built in node.js

## How to use

Setup an outgoing webhook in you slack integrations.
The url that you link to should be the url where you are hosting this app.

![](https://s3-us-west-2.amazonaws.com/dotnodebucket/screen1.png?X-Amz-Date=20140822T211624Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=acc617808b3fdcfb52e5872d114f098055de34148d9d8677368f9a7cecb50e3b&X-Amz-Credential=ASIAITFVX6KOZGP7BR6Q/20140822/us-west-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEE4akAJ97RqxyvdMyBvTelQaey8/U9LFFFo%2BXPMUfjInd6%2BdrRfXlbOP%2B2b5eGJuetUlkVP0Nz1pwywO4W/pJu6AVTtZKktZOevBRDmc4oWyVmEisxkSeZlj0chL9L7YneDhihtfFpyk1k2PJ10AmVhi9/K00H2gmPfn6u%2BG8Px/rlkpg4IWz39mgTX5IgZj2A0uAE6BXhjRtNHMDNVok2ClUS%2BRsr0QOf0llPnu9CvpOtyuGbhV5NPP5n92VhffSymX6I2sOobui8ece36V3IIeFuP8yiQ/%2BKDTiCStB2/2/u7webrP7fsHzz%2BKAQuxQ59P/bi/6%2BLlBLEicSJGFum8tiKH4FtwqWs5KEhU26dVeafARyCO5N2fBQ%3D%3D)

The trigger word(s) can be anything you want it to be, in this example I use 'gif:'.

It is also set for all channels, you can set it for specific channel if you'd like.

Also, feel free to change the default webhook image and name!

This app doesn't rely on incoming webhooks, so you don't have to worry about tokens.
The gif is automatically returned to the outgoing webhook and displayed in the chat box.

## Enjoy

This app will return the first gif returned from the Giphy api.

Enjoy with your team.

![](https://s3-us-west-2.amazonaws.com/dotnodebucket/screen2.png?X-Amz-Date=20140822T211358Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=b2021a08ebabfe3fdbaf76f82c90bea7b28439b572909bf6347c72587607689a&X-Amz-Credential=ASIAITFVX6KOZGP7BR6Q/20140822/us-west-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=AQoDYXdzEE4akAJ97RqxyvdMyBvTelQaey8/U9LFFFo%2BXPMUfjInd6%2BdrRfXlbOP%2B2b5eGJuetUlkVP0Nz1pwywO4W/pJu6AVTtZKktZOevBRDmc4oWyVmEisxkSeZlj0chL9L7YneDhihtfFpyk1k2PJ10AmVhi9/K00H2gmPfn6u%2BG8Px/rlkpg4IWz39mgTX5IgZj2A0uAE6BXhjRtNHMDNVok2ClUS%2BRsr0QOf0llPnu9CvpOtyuGbhV5NPP5n92VhffSymX6I2sOobui8ece36V3IIeFuP8yiQ/%2BKDTiCStB2/2/u7webrP7fsHzz%2BKAQuxQ59P/bi/6%2BLlBLEicSJGFum8tiKH4FtwqWs5KEhU26dVeafARyCO5N2fBQ%3D%3D)

## giphyslack in action

![](http://quick.as/embed/6jaktwk5)
