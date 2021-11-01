const express = require('express');
const app = express();
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(require('morgan') ('dev'));

app.get('/', (req, res, next) => {
res.send(`
<html>
<head>
<link rel='stylesheet' href='/assets/styles.css' />
</head>
<body>
<nav>
<a>Sandwiches</a>
<a href='/ingredients'>All Ingredients</a>
</nav>
    <h1>Sandwich Choices</h1>
    <ul>
    <li> <a href='/buff'>Buffalo Chicken</a></li>
    <li><a href='/liver'>Liverwurst</a></li>
    <li> <a href='/club'>Turkey Club</a></li>
    </ul>


</body>
</html>
`);
});


app.get('/buff', (req, res, next) => {
    res.send(`
    <html>
    <head>
    <link rel='stylesheet' href='/assets/styles.css' />
    </head>
    <body>
    <nav>
    <a href='/'>Sandwiches</a>
    <a href='/ingredients'>All Ingredients</a>
    </nav>
        <h1>The Buffalo Chicken Sandwich</h1>
        <h2> Best ordered at a deli counter on a <a href='/wedge'>wedge</a> with light red <a href='/onion'> onion,</a> and <a href='/blue'>blue cheese</a> crumble.</h2>
        <ul> <p> Ingredients </p>
        <li> <a href='/wedge'>Bread</a></li>
        <li><a href='/chicken'>Chicken</a></li>
        <li><a href='/blue'>Blue Cheese</a></li>
        <li> <a href='/lettuce'>Lettuce</a></li>
        <li> <a href='/tomato'>Tomato</a></li>
        <li><a href='/onion'>Onion</a></li>
        <li> <a href='/hot'>Buffalo Sauce</a></li>
        </ul>
    
    
    </body>
    </html>
    `);
    });

    app.get('/liver', (req, res, next) => {
        res.send(`
        <html>
        <head>
        <link rel='stylesheet' href='/assets/styles.css' />
        </head>
        <body>
        <nav>
        <a href='/'>Sandwiches</a>
        <a href='/ingredients'>All Ingredients</a>
        </nav>
            <h1>The Liverwurst Sandwich</h1>
            <h2> Saucisse de foie de porc. Find it at McSorley's or Schaller & Weber. For sophisticated palates only. I think</h2>
            <ul> <p> Ingredients </p>
            <li> <a href='/wedge'>Bread</a></li>
            <li><a href='/liverwurst'>Liverwurst</a></li>
            <li><a href='/onion'>Onion</a></li>
            <li> <a href='/mustard'>Mustard</a></li>
            </ul>
        
        
        </body>
        </html>
        `);
        });
    
        app.get('/club', (req, res, next) => {
            res.send(`
            <html>
            <head>
            <link rel='stylesheet' href='/assets/styles.css' />
            </head>
            <body>
            <nav>
            <a href='/'>Sandwiches</a>
            <a href='/ingredients'>All Ingredients</a>
            </nav>
                <h1>The Turkey Club</h1>
                <h2> Some people opine that Club is an acronym for <a href='/chicken'>Chicken</a>, <a href='/lettuce'>Lettuce</a> Under <a href='/wedge'>Bread</a></li></h2>
                <ul> <p> Ingredients </p>
                <li> <a href='/wedge'>Bread</a></li>
                <li><a href='/turkey'>Turkey</a></li>
                <li><a href='/bacon'>Bacon</a></li>
                <li> <a href='/lettuce'>Lettuce</a></li>
                <li> <a href='/tomato'>Tomato</a></li>
                <li><a href='/mayo'>Mayo</a></li>
            
                </ul>
            
            
            </body>
            </html>
            `);
            });
        
            app.get('/ingredients', (req, res, next) => {
                res.send(`
                <html>
                <head>
                <link rel='stylesheet' href='/assets/styles.css' />
                </head>
                <body>
                <nav>
                <a href='/'>Sandwiches</a>
                <a>All Ingredients</a>
                </nav>
                    <h1>The Ingredients List</h1>
                    <h2> </h2>
                    <ul> 
                    <li> <a href='/wedge'>Bread</a></li>
                    <li> <a href='/chicken'>Chicken</a></li>
                    <li><a href='/liverwurst'>Liverwurst</a></li>
                    <li><a href='/turkey'>Turkey</a></li>
                    <li><a href='/bacon'>Bacon</a></li>
                    <li> <a href='/lettuce'>Lettuce</a></li>
                    <li> <a href='/tomato'>Tomato</a></li>
                    <li><a href='/mayo'>Mayo</a></li>
                    <li><a href='/onion'>Onion</a></li>
                    <li> <a href='/mustard'>Mustard</a></li>
                    <li><a href='/blue'>Blue Cheese</a></li>
                    <li> <a href='/hot'>Buffalo Sauce</a></li>
                    </ul>
                
                </body>
                </html>
                `);
                });

                app.get('/wedge', (req, res, next) => {
                    res.send(`
                    <html>
                    <head>
                    <link rel='stylesheet' href='/assets/styles.css' />
                    </head>
                    <body>
                    <nav>
                    <a href='/'>Sandwiches</a>
                    <a href='/ingredients'>All Ingredients</a>
                    </nav>
                        <h1>Bread</h1>
                        <h2>Carbs!</h2>
                        <p>Found in all <a href='/'>sandwiches</a>
               
                    </body>
                    </html>
                    `);
                    });

                    app.get('/chicken', (req, res, next) => {
                        res.send(`
                        <html>
                        <head>
                        <link rel='stylesheet' href='/assets/styles.css' />
                        </head>
                        <body>
                        <nav>
                        <a href='/'>Sandwiches</a>
                        <a href='/ingredients'>All Ingredients</a>
                        </nav>
                            <h1>Chicken</h1>
                            <h2>Breaded, Grilled or People who scare easily.</h2>
                            <p>Essential to the <a href='/buff'>Buffalo Chicken</a> and sometimes found in <a href='/club'>Clubs</a>
                   
                        </body>
                        </html>
                        `);
                        });

                        app.get('/liverwurst', (req, res, next) => {
                            res.send(`
                            <html>
                            <head>
                            <link rel='stylesheet' href='/assets/styles.css' />
                            </head>
                            <body>
                            <nav>
                            <a href='/'>Sandwiches</a>
                            <a href='/ingredients'>All Ingredients</a>
                            </nav>
                                <h1>Liverwurst (meat)</h1>
                                <h2>An acquired taste. High in sodium.</h2>
                                <p>Cannot have a <a href='/liver'>Liverwust Sandwich</a> without it</p>
                       
                            </body>
                            </html>
                            `);
                            });
            
                            app.get('/turkey', (req, res, next) => {
                                res.send(`
                                <html>
                                <head>
                                <link rel='stylesheet' href='/assets/styles.css' />
                                </head>
                                <body>
                                <nav>
                                <a href='/'>Sandwiches</a>
                                <a href='/ingredients'>All Ingredients</a>
                                </nav>
                                    <h1>Turkey</h1>
                                    <h2>Your yearly dose of tryptophan.</h2>
                                    <p>Sometimes found in <a href='/club'>Clubs</a>
                           
                                </body>
                                </html>
                                `);
                                });

                                app.get('/bacon', (req, res, next) => {
                                    res.send(`
                                    <html>
                                    <head>
                                    <link rel='stylesheet' href='/assets/styles.css' />
                                    </head>
                                    <body>
                                    <nav>
                                    <a href='/'>Sandwiches</a>
                                    <a href='/ingredients'>All Ingredients</a>
                                    </nav>
                                        <h1>Bacon</h1>
                                        <h2>One of the many delicious uses of pig.</h2>
                                        <p>Found in <a href='/club'>Clubs</a>
                               
                                    </body>
                                    </html>
                                    `);
                                    });

                                    app.get('/lettuce', (req, res, next) => {
                                        res.send(`
                                        <html>
                                        <head>
                                        <link rel='stylesheet' href='/assets/styles.css' />
                                        </head>
                                        <body>
                                        <nav>
                                        <a href='/'>Sandwiches</a>
                                        <a href='/ingredients'>All Ingredients</a>
                                        </nav>
                                            <h1>Lettuce</h1>
                                            <h2>Get some greens on your sandwich!</h2>
                                            <p>Found in <a href='/buff'>Buffalo Chicken</a> and  <a href='/club'>Clubs</a></p>
                                   
                                        </body>
                                        </html>
                                        `);
                                        });

                                        app.get('/tomato', (req, res, next) => {
                                            res.send(`
                                            <html>
                                            <head>
                                            <link rel='stylesheet' href='/assets/styles.css' />
                                            </head>
                                            <body>
                                            <nav>
                                            <a href='/'>Sandwiches</a>
                                            <a href='/ingredients'>All Ingredients</a>
                                            </nav>
                                                <h1>Tomato</h1>
                                                <h2>I think its a fruit.</h2>
                                                <p>Found in <a href='/buff'>Buffalo Chicken</a> and <a href='/club'>Clubs</a></p>
                                       
                                            </body>
                                            </html>
                                            `);
                                            });
    
                                            app.get('/mayo', (req, res, next) => {
                                                res.send(`
                                                <html>
                                                <head>
                                                <link rel='stylesheet' href='/assets/styles.css' />
                                                </head>
                                                <body>
                                                <nav>
                                                <a href='/'>Sandwiches</a>
                                                <a href='/ingredients'>All Ingredients</a>
                                                </nav>
                                                    <h1>Mayo</h1>
                                                    <h2>Honestly have no clue what this one is. I think egg yokes are involved?</h2>
                                                    <p>Found in <a href='/club'>Clubs</a> and sometimes <a href='/buff'>Buffalo Chicken</a> </p>
                                           
                                                </body>
                                                </html>
                                                `);
                                                });
                                      
                                                app.get('/onion', (req, res, next) => {
                                                    res.send(`
                                                    <html>
                                                    <head>
                                                    <link rel='stylesheet' href='/assets/styles.css' />
                                                    </head>
                                                    <body>
                                                    <nav>
                                                    <a href='/'>Sandwiches</a>
                                                    <a href='/ingredients'>All Ingredients</a>
                                                    </nav>
                                                        <h1>Onion</h1>
                                                        <h2>Despite them tasting and looking nothing alike, onions are sometimes confused with ogres.</h2>
                                                        <p>Found in <a href='/liver'>Liverwurst Sandwiches</a> and sometimes <a href='/buff'>Buffalo Chicken</a> </p>
                                               
                                                    </body>
                                                    </html>
                                                    `);
                                                    });
                                          
                                                    app.get('/mustard', (req, res, next) => {
                                                        res.send(`
                                                        <html>
                                                        <head>
                                                        <link rel='stylesheet' href='/assets/styles.css' />
                                                        </head>
                                                        <body>
                                                        <nav>
                                                        <a href='/'>Sandwiches</a>
                                                        <a href='/ingredients'>All Ingredients</a>
                                                        </nav>
                                                            <h1>Mustard</h1>
                                                            <h2>Yellow, Grainey, or maybe even Dijon. </h2>
                                                            <p>Found in the <a href='/liver'>Liverwurst</a></p>
                                                   
                                                        </body>
                                                        </html>
                                                        `);
                                                        });

                                                        app.get('/blue', (req, res, next) => {
                                                            res.send(`
                                                            <html>
                                                            <head>
                                                            <link rel='stylesheet' href='/assets/styles.css' />
                                                            </head>
                                                            <body>
                                                            <nav>
                                                            <a href='/'>Sandwiches</a>
                                                            <a href='/ingredients'>All Ingredients</a>
                                                            </nav>
                                                                <h1>Blue Cheese</h1>
                                                                <h2>Moldy and delicious. Blue Cheese crumbles or dressing acceptable.</h2>
                                                                <p>Essential to the <a href='/buff'>Buffalo Chicken</a></p>
                                                       
                                                            </body>
                                                            </html>
                                                            `);
                                                            });
                                           
                                                            app.get('/hot', (req, res, next) => {
                                                                res.send(`
                                                                <html>
                                                                <head>
                                                                <link rel='stylesheet' href='/assets/styles.css' />
                                                                </head>
                                                                <body>
                                                                <nav>
                                                                <a href='/'>Sandwiches</a>
                                                                <a href='/ingredients'>All Ingredients</a>
                                                                </nav>
                                                                    <h1>Buffalo Sauces</h1>
                                                                    <h2>Should be cayenne pepper based. Preferrably Frank's Red Hot</h2>
                                                                    <p>Essential to the <a href='/buff'>Buffalo Chicken</a></p>
                                                           
                                                                </body>
                                                                </html>
                                                                `);
                                                                });
                                               
                                       
                                       
                                        
                                   


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`))