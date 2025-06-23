var date = new Date();
var year = date.getFullYear();
document.getElementById('me').innerHTML = year;

$(document).ready(function(){

    // Helper function to handle toggle with state saving/restoring
    function setToggleState(buttonSelector, contentSelector, storageKey) {
        // Restore saved state on load
        let saved = localStorage.getItem(storageKey);
        if (saved === "true") {
            $(contentSelector).show();
        } else {
            $(contentSelector).hide();
        }

        // Save new state on toggle click
        $(buttonSelector).off('click').on('click', function(){
            $(contentSelector).toggle();
            let isVisible = $(contentSelector).is(':visible');
            localStorage.setItem(storageKey, isVisible);
        });
    }

    // PHE
    setToggleState('.phe-sub', '.class1', 'toggle-phe-sub');
    setToggleState('.jss1', '.j1-subjects', 'toggle-jss1');
    setToggleState('.jss2', '.j2-subjects', 'toggle-jss2');
    setToggleState('.jss3', '.j3-subjects', 'toggle-jss3');

    // AGRIC CLASS
    setToggleState('.agric-sub', '.agric-class1', 'toggle-agric-sub');
    setToggleState('.agric-jss1', '.agric-j1-subjects', 'toggle-agric-jss1');
    setToggleState('.agric-jss2', '.agric-j2-subjects', 'toggle-agric-jss2');
    setToggleState('.agric-jss3', '.agric-j3-subjects', 'toggle-agric-jss3');

    // BASIC SCIENCE
    setToggleState('.bs-sub', '.bs-class1', 'toggle-bs-sub');
    setToggleState('.bs-jss1', '.bs-j1-subjects', 'toggle-bs-jss1');
    setToggleState('.bs-jss2', '.bs-j2-subjects', 'toggle-bs-jss2');
    setToggleState('.bs-jss3', '.bs-j3-subjects', 'toggle-bs-jss3');

    // BASIC TECH
    setToggleState('.bt-sub', '.bt-class1', 'toggle-bt-sub');
    setToggleState('.bt-jss1', '.bt-j1-subjects', 'toggle-bt-jss1');
    setToggleState('.bt-jss2', '.bt-j2-subjects', 'toggle-bt-jss2');
    setToggleState('.bt-jss3', '.bt-j3-subjects', 'toggle-bt-jss3');

    // BUSINESS STUDIES
    setToggleState('.bst-sub', '.bst-class1', 'toggle-bst-sub');
    setToggleState('.bst-jss1', '.bst-j1-subjects', 'toggle-bst-jss1');
    setToggleState('.bst-jss2', '.bst-j2-subjects', 'toggle-bst-jss2');
    setToggleState('.bst-jss3', '.bst-j3-subjects', 'toggle-bst-jss3');

    // CIVIC EDUCATION
    setToggleState('.civic-sub', '.civic-class1', 'toggle-civic-sub');
    setToggleState('.civic-jss1', '.civic-j1-subjects', 'toggle-civic-jss1');
    setToggleState('.civic-jss2', '.civic-j2-subjects', 'toggle-civic-jss2');
    setToggleState('.civic-jss3', '.civic-j3-subjects', 'toggle-civic-jss3');

    // CULTURAL AND CREATIVE ART CCA
    setToggleState('.cca-sub', '.cca-class1', 'toggle-cca-sub');
    setToggleState('.cca-jss1', '.cca-j1-subjects', 'toggle-cca-jss1');
    setToggleState('.cca-jss2', '.cca-j2-subjects', 'toggle-cca-jss2');
    setToggleState('.cca-jss3', '.cca-j3-subjects', 'toggle-cca-jss3');

    // COMPUTER SCIENCE
    setToggleState('.com-sub', '.com-class1', 'toggle-com-sub');
    setToggleState('.com-jss1', '.com-j1-subjects', 'toggle-com-jss1');
    setToggleState('.com-jss2', '.com-j2-subjects', 'toggle-com-jss2');
    setToggleState('.com-jss3', '.com-j3-subjects', 'toggle-com-jss3');

    // ENGLISH
    setToggleState('.eng-sub', '.eng-class1', 'toggle-eng-sub');
    setToggleState('.eng-jss1', '.eng-j1-subjects', 'toggle-eng-jss1');
    setToggleState('.eng-jss2', '.eng-j2-subjects', 'toggle-eng-jss2');
    setToggleState('.eng-jss3', '.eng-j3-subjects', 'toggle-eng-jss3');

    // HISTORY
    setToggleState('.hi-sub', '.hi-class1', 'toggle-hi-sub');
    setToggleState('.hi-jss1', '.hi-j1-subjects', 'toggle-hi-jss1');
    setToggleState('.hi-jss2', '.hi-j2-subjects', 'toggle-hi-jss2');
    setToggleState('.hi-jss3', '.hi-j3-subjects', 'toggle-hi-jss3');

    // HOME ECONOMICS
    setToggleState('.he-sub', '.he-class1', 'toggle-he-sub');
    setToggleState('.he-jss1', '.he-j1-subjects', 'toggle-he-jss1');
    setToggleState('.he-jss2', '.he-j2-subjects', 'toggle-he-jss2');
    setToggleState('.he-jss3', '.he-j3-subjects', 'toggle-he-jss3');

    // ISLAMIC RELIGION
    setToggleState('.irk-sub', '.irk-class1', 'toggle-irk-sub');
    setToggleState('.irk-jss1', '.irk-j1-subjects', 'toggle-irk-jss1');
    setToggleState('.irk-jss2', '.irk-j2-subjects', 'toggle-irk-jss2');
    setToggleState('.irk-jss3', '.irk-j3-subjects', 'toggle-irk-jss3');

    // MATHEMATICS
    setToggleState('.math-sub', '.math-class1', 'toggle-math-sub');
    setToggleState('.math-jss1', '.math-j1-subjects', 'toggle-math-jss1');
    setToggleState('.math-jss2', '.math-j2-subjects', 'toggle-math-jss2');
    setToggleState('.math-jss3', '.math-j3-subjects', 'toggle-math-jss3');

    // SECURITY
    setToggleState('.se-sub', '.se-class1', 'toggle-se-sub');
    setToggleState('.se-jss1', '.se-j1-subjects', 'toggle-se-jss1');
    setToggleState('.se-jss2', '.se-j2-subjects', 'toggle-se-jss2');
    setToggleState('.se-jss3', '.se-j3-subjects', 'toggle-se-jss3');

    // SOCIAL STUDIES
    setToggleState('.ss-sub', '.ss-class1', 'toggle-ss-sub');
    setToggleState('.ss-jss1', '.ss-j1-subjects', 'toggle-ss-jss1');
    setToggleState('.ss-jss2', '.ss-j2-subjects', 'toggle-ss-jss2');
    setToggleState('.ss-jss3', '.ss-j3-subjects', 'toggle-ss-jss3');

    // YORUBA
    setToggleState('.yo-sub', '.yo-class1', 'toggle-yo-sub');
    setToggleState('.yo-jss1', '.yo-j1-subjects', 'toggle-yo-jss1');
    setToggleState('.yo-jss2', '.yo-j2-subjects', 'toggle-yo-jss2');
    setToggleState('.yo-jss3', '.yo-j3-subjects', 'toggle-yo-jss3');

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
