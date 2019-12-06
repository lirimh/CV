  window.onscroll = function() {myFunction()};
                var navbar = document.getElementById("navbar");
                var sticky = navbar.offsetTop;

                function myFunction() {
                if (window.pageYOffset >= sticky) {
                    navbar.classList.add("sticky")
                } else {
                    navbar.classList.remove("sticky");
                }
                }



  $(document).ready(function() {
                  // Check if element is scrolled into view
                  function isScrolledIntoView(elem) {
                    var docViewTop = $(window).scrollTop();
                    var docViewBottom = docViewTop + $(window).height();
                
                    var elemTop = $(elem).offset().top;
                    var elemBottom = elemTop + $(elem).height();
                
                    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
                  }
                  // If element is scrolled into view, make animations
                  $(window).scroll(function() {
                    $('.scroll-animations .animated').each(function() {
                      if (isScrolledIntoView(this) === true) {
                        $(this).addClass('rotateIn');
                      }
                    });
                  });
                });


      let chartConfig = {
      theme: 'classic',
      graphset: [
        {
          type: 'hbar',
          backgroundColor: 'transparent',
          borderColor: 'none',
          borderWidth: '2px',
          height: '50%',
          title: {
            text: 'Company Performance',
            marginTop: '10px',
            marginLeft: '20px',
            backgroundColor: 'none',
            fontSize: '18px',
            shadow: false,
            textAlign: 'left'
          },
          plot: {
            barsOverlap: '100%',
            barWidth: '17px',
            thousandsSeparator: ',',
            animation: {
              effect: 'ANIMATION_SLIDE_BOTTOM'
            }
          },
          plotarea: {
            margin: '50px 25px 20px 25px'
          },
          scaleX: {
            values: ['Bootstrap', 'JavaScript / jQuery', 'CSS / CSS3', 'HTML / HTML5'],
            guide: {
              visible: false
            },
            item: {
              color: '#fff',
              offsetX: '210px',
              textAlign: 'left',
              width: '200px'
            },
            lineColor: 'none',
            tick: {
              visible: false
            }
          },
          scaleY: {
            guide: {
              visible: false
            },
            item: {
              visible: false
            },
            lineColor: 'none',
            tick: {
              visible: false
            }
          },
          series: [
            {
              values: [70, 55, 80, 85],
              tooltip: {
                shadow: false
              },
              hoverState: {
                visible: false
              },
              styles: [
                {
                  backgroundColor: '#563d7c'
                },
                {
                  backgroundColor: '#017790'
                },
                {
                  backgroundColor: '#ee5b18'
                },
                {
                  backgroundColor: '#c94742'
                }
              ],
              tooltipText: '%node-value%',
              zIndex: 2
            },
            {
              values: [100, 100, 100, 100],
              valueBox: {
                text: '%data-rvalues%',
                fontColor: '#fff',
                fontSize: '10px',
                offsetX: '3px',
                offsetY: '-1px',
                placement: 'top-in',
                textAlign: 'right',
                visible: true
              },
              backgroundColor: '#000',
              dataRvalues: [70, 55, 80, 85],
              maxTrackers: 0,
              zIndex: -1
            }
          ]
        },
      ]
    };
     
    zingchart.render({
      id: 'myChart',
      data: chartConfig
    });
