var date = new Date();
var year = date.getFullYear();
document.getElementById('me').innerHTML = year;

const navTogle = document.querySelector('#navtogle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hambuger = document.querySelector('#hambuger')

navTogle.addEventListener('click', ()=>{
    nav.classList.toggle('open')
    navIcon.forEach(icon =>{
        icon.classList.toggle('hidden');
    })
})
window.addEventListener('resize', ()=>{
    if(document.body.clientWidth > 820){
       nav.classList.remove('open')
       navIcon.forEach(icon =>{
        icon.classList.add('hidden');
    });
    hambuger.classList.remove('hidden')
       
    }
})

$(document).ready(function(){

    // Helper function to handle simple toggle
    function simpleToggle(buttonSelector, contentSelector) {
        $(contentSelector).hide(); // Always hide by default
        $(buttonSelector).off('click').on('click', function(){
            $(contentSelector).toggle();
        });
    }

    // PHE
    simpleToggle('.phe-sub', '.class1');
    simpleToggle('.jss1', '.j1-subjects');
    simpleToggle('.jss2', '.j2-subjects');
    simpleToggle('.jss3', '.j3-subjects');

    // AGRIC CLASS
    simpleToggle('.agric-sub', '.agric-class1');
    simpleToggle('.agric-jss1', '.agric-j1-subjects');
    simpleToggle('.agric-jss2', '.agric-j2-subjects');
    simpleToggle('.agric-jss3', '.agric-j3-subjects');

    // BASIC SCIENCE
    simpleToggle('.bs-sub', '.bs-class1');
    simpleToggle('.bs-jss1', '.bs-j1-subjects');
    simpleToggle('.bs-jss2', '.bs-j2-subjects');
    simpleToggle('.bs-jss3', '.bs-j3-subjects');

    // BASIC TECH
    simpleToggle('.bt-sub', '.bt-class1');
    simpleToggle('.bt-jss1', '.bt-j1-subjects');
    simpleToggle('.bt-jss2', '.bt-j2-subjects');
    simpleToggle('.bt-jss3', '.bt-j3-subjects');

    // BUSINESS STUDIES
    simpleToggle('.bst-sub', '.bst-class1');
    simpleToggle('.bst-jss1', '.bst-j1-subjects');
    simpleToggle('.bst-jss2', '.bst-j2-subjects');
    simpleToggle('.bst-jss3', '.bst-j3-subjects');

    // CIVIC EDUCATION
    simpleToggle('.civic-sub', '.civic-class1');
    simpleToggle('.civic-jss1', '.civic-j1-subjects');
    simpleToggle('.civic-jss2', '.civic-j2-subjects');
    simpleToggle('.civic-jss3', '.civic-j3-subjects');

    // CULTURAL AND CREATIVE ART CCA
    simpleToggle('.cca-sub', '.cca-class1');
    simpleToggle('.cca-jss1', '.cca-j1-subjects');
    simpleToggle('.cca-jss2', '.cca-j2-subjects');
    simpleToggle('.cca-jss3', '.cca-j3-subjects');

    // COMPUTER SCIENCE
    simpleToggle('.com-sub', '.com-class1');
    simpleToggle('.com-jss1', '.com-j1-subjects');
    simpleToggle('.com-jss2', '.com-j2-subjects');
    simpleToggle('.com-jss3', '.com-j3-subjects');

    // ENGLISH
    simpleToggle('.eng-sub', '.eng-class1');
    simpleToggle('.eng-jss1', '.eng-j1-subjects');
    simpleToggle('.eng-jss2', '.eng-j2-subjects');
    simpleToggle('.eng-jss3', '.eng-j3-subjects');

    // HISTORY
    simpleToggle('.hi-sub', '.hi-class1');
    simpleToggle('.hi-jss1', '.hi-j1-subjects');
    simpleToggle('.hi-jss2', '.hi-j2-subjects');
    simpleToggle('.hi-jss3', '.hi-j3-subjects');

    // HOME ECONOMICS
    simpleToggle('.he-sub', '.he-class1');
    simpleToggle('.he-jss1', '.he-j1-subjects');
    simpleToggle('.he-jss2', '.he-j2-subjects');
    simpleToggle('.he-jss3', '.he-j3-subjects');

    // ISLAMIC RELIGION
    simpleToggle('.irk-sub', '.irk-class1');
    simpleToggle('.irk-jss1', '.irk-j1-subjects');
    simpleToggle('.irk-jss2', '.irk-j2-subjects');
    simpleToggle('.irk-jss3', '.irk-j3-subjects');

    // MATHEMATICS
    simpleToggle('.math-sub', '.math-class1');
    simpleToggle('.math-jss1', '.math-j1-subjects');
    simpleToggle('.math-jss2', '.math-j2-subjects');
    simpleToggle('.math-jss3', '.math-j3-subjects');

    // SECURITY
    simpleToggle('.se-sub', '.se-class1');
    simpleToggle('.se-jss1', '.se-j1-subjects');
    simpleToggle('.se-jss2', '.se-j2-subjects');
    simpleToggle('.se-jss3', '.se-j3-subjects');

    // SOCIAL STUDIES
    simpleToggle('.ss-sub', '.ss-class1');
    simpleToggle('.ss-jss1', '.ss-j1-subjects');
    simpleToggle('.ss-jss2', '.ss-j2-subjects');
    simpleToggle('.ss-jss3', '.ss-j3-subjects');

    // YORUBA
    simpleToggle('.yo-sub', '.yo-class1');
    simpleToggle('.yo-jss1', '.yo-j1-subjects');
    simpleToggle('.yo-jss2', '.yo-j2-subjects');
    simpleToggle('.yo-jss3', '.yo-j3-subjects');

});

$(document).ready(function(){
    function closeElement(){
        if($(window).width()<= 720){
            $('.me').hide();
            $('.nav-toggle').click(function(){
                $('.me').toggle();
            });
        }
        else{
            $('.me').show();
        }
    }
    closeElement();
    $(window).resize(function(){
        closeElement();
    });
});
