jQuery(document).ready(function($) {
    $('#main.js-fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:[
            'home',
            'statistics',
            'competitors',
            'notifications',
            'affiliate-program',
            'payments',
            'multilanguage'
        ],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        sectionsColor : [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: '.footer',
        responsiveWidth: 992,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(home, nexthome, direction){

        },
        afterLoad: function(anchorLink, home){
            console.log(this);
            console.log(anchorLink);
            $this = $(this);

            switch(anchorLink) {
                case 'statistics':
                    if ($this.hasClass('initialized-chart')) {
                        break;
                    } else {
                        $this.addClass('initialized-chart');
                        window.initStatisticsChart();
                    }
                    break;
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, home, slideAnchor, slidehome){},
        onSlideLeave: function(anchorLink, home, slidehome, direction, nextSlidehome){}
    });

    $('[data-toggle="tab"]').on('click', function() {
       var $this = $(this),
           contentElementId = $this.attr('href');

       $this.closest('.section').attr('data-activated-tab', contentElementId);
    });

    $('.active[data-toggle="tab"]').each(function(index, element) {
        var $element = $(element),
            contentElementId = $element.attr('href');

        $element.closest('.section').attr('data-activated-tab', contentElementId);
    });
});