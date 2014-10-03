({
    block : 'page',
    title : 'Yeoman BEM',
    favicon : 'favicon.ico',
    head : [{ elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' }}],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    scripts : [{ elem : 'js', url : 'assets/application.min.js' }],
    content : [
        {
            elem : 'header',
            tag : 'header',
            content : [
            ]
        },
        {
            elem : 'content',
            tag : 'main',
            content : [
                { block : 'heading', lvl : 1, content : 'Level 1' },
                {
                    block : 'paragraph',
                    mods : { lead : true },
                    content : [
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                        'Nulla consequat massa quis enim.'
                    ]
                },
                {
                    block : 'paragraph',
                    content : [
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                        'Nulla consequat massa quis enim.'
                    ]
                },
                { block : 'heading', lvl : 2, content : 'Level 2' },
                {
                    block : 'paragraph',
                    content : [
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                        'Nulla consequat massa quis enim.'
                    ]
                },
                { block : 'heading', lvl : 3, content : 'Level 3' },
                {
                    block : 'paragraph',
                    content : [
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                        'Nulla consequat massa quis enim.'
                    ]
                },
                { block : 'heading', lvl : 4, content : 'Level 4' },
                {
                    block : 'paragraph',
                    mark : 'nb',
                    content : [
                        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ',
                        'Aenean commodo ligula eget dolor. Aenean massa. ',
                        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
                        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. ',
                        'Nulla consequat massa quis enim.'
                    ]
                },
                {
                    block : 'source',
                    mods : { lang : 'js', theme : 'github' },
                    content : [
                        'function test() {\n' +
                        '    return \'false\';\n' +
                        '}'
                    ]
                },
                {
                    block : 'image',
                    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png'
                },
                {
                    block : 'image',
                    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
                    caption : 'Логотип БЭМ'
                },
                {
                    block : 'image',
                    url : 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/sign.png',
                    caption : 'Логотип БЭМ',
                    attrs : { width : '60px', height: '50px' }
                },
                { block : 'list', items: [ 'item 1', 'item 2' ] },
                { block : 'list', mods : { type: 'ordered' }, items: [ 'ordered item 1', 'ordered item 2' ] },
                {
                    block : 'list',
                    items : [
                        'item 1',
                        [
                            'item 2',
                            {
                                block : 'list',
                                items : [ 'nested item 1', 'nested item 2' ]
                            }
                        ]
                    ]
                },
                {
                    block : 'blockquote',
                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                },
                {
                    block : 'blockquote',
                    source : 'Anton Winogradov',
                    content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [

            ]
        }
    ]
})
