# aimer-discog
---
_Aimer archival web_

consists of a single page with sections:
1. Biography
2. Discography
3. Live Performance
4. Gallery

built with reactjs + tailwindcss without remote database.


#### Directory Structure

```
public/
    favicon.ico
    img_data/
        *.jpg,.png
src/
    components/
            *.js
    style/
        montserrat/
                *.ttf
        *.css
    pseudoDB/
        *.js
    homepage.js
    index.js

```

* img_data  
    storage for all image shown in the webapp

* components  
    contains all parts / smaller component to be mounted on homepage.js

* style  
    contains external font and css for `<body>`

* pseudoDB  
    substitute of real remote database. all writen in js object format.

* homepage.js  
    placeholder / frame to put all the components together

