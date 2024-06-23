<h2 class="title"> Image Manipulation Project
</h2>


### Briefing
<p class="briefing">
I use Python Pygame to manipulate pictures of an image to create cool effects!.
<br>
Date Started: 
</p>

<div id="main_image">
    <img src="data/PYTHON/image_manip/resources/image_manip_res_3.png"/>
</div>

### Elaboration
<p class="elaboration">
I did this to exactly replicate that done in Javascript.
It was more difficult as most of the funcitons provided by JS Canvas were not available in Pygame, so I had to create them myself.
It involved reading the pixels of the image after loading it, then determining the stride.
Then I folloqwed the OOP approavh of using a CELL class with a Pygame Surface object used to store pixels to be displayed on the screen.
The Cell class was used to render a section of the image's pixels using some cool JS Canvas functions. This way, a grid of these cells was used to display the full image. Then the Effect class, which was used to make the grid was used to manipulate each pixel to cause some effect.
Then later, mouse position was gotten and used to manipulate the position of the pixels. This was used to create the effect.
Many kinds of effects were implemented -- some to spread out the pixels within the mouse's range, and another to draw them in like a sinkhole.
</p>

### References
<p class="references">
Frank's Laboratory, 'Learn Creative Coding - Image Effects' -- Youtube
</p>