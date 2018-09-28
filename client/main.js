

Template.main.events({

    'scroll #myHeader'(event, instance) {
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;


        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    },
    'focusin #divHeader '(event, instance) {
        const menu = document.getElementById('menu');
        // console.log(menu.style.top +'px');
        menu.style.top = document.getElementById('divHeader').getBoundingClientRect().top + 'px';
        //console.log(event.target.getBoundingClientRect().top);   
        //console.log(menu.style.top);    
    },
    'focusout #divHeader input'(event, instance) {

    }, 'focusin #divQuestion'(event, instance) {
        const menu = document.getElementById('menu');
        menu.style.top = document.getElementById('divQuestion').getBoundingClientRect().top + 'px';



    },
    'focusout #divQuestion'(event, instance) {

    }



});
