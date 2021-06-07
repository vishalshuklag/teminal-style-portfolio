const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const  contactContent= document.querySelector('#contact-content')

about.addEventListener('click', () =>{
    const aboutBox = new WinBox({
        title: 'About Me',
        background: '#00aa00',
        width : '400px',
        height: '400px',
        top: 100,
        right: 50,
        botton: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur:  function(){
            this.setBackground('#777')
        },
        
    })
})

contact.addEventListener('click', () =>{
    const conatctBox = new WinBox({
        title: 'Contact',
        background: '#00aa00',
        width : '400px',
        height: '400px',
        top: 150,
        right: 50,
        botton: 50,
        left: 250,
        mount: contactContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur:  function(){
            this.setBackground('#777')
        },
    })
})