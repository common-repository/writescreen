/* 
 * JavaScript file for Writeboard plugin.
 * Version: 1.0
 * Author: Jerome Covington
 * License: GPL2
 */

var Writescreen = (function($) {
    var postStuff = $('#poststuff'),
        buttonText,
        writescreenButton,
        buttonSelector,
        titleWrapInside,
        postBodyContent,
        sideInfoColumn;

    function calculateOpenedHeight() {
        var windowHeight = $(window).height(),
            topSection = 217,
            bottomSection = 44,
            openedHeight = windowHeight - topSection - bottomSection;
        
        return openedHeight;
    }

    function insertButton() {
        titleWrapInside.append( writescreenButton );
        liveEvents( buttonSelector );
    }

    function liveEvents(el) {
        el.live('click', function(e) {
            var $this = $(this),
                contentTable = $('#content_tbl'),
                contentIframe = $('#content_ifr');
            
            if ( !postBodyContent.hasClass('opened') ) {
                openWritescreen();
                expandTable(contentTable);
                expandIframe(contentIframe);
                makeSideInfoHidden();
                bindWindowResize(contentIframe);
                $this.text('Close Writescreen');
                $this.attr( 'title', 'Return to normal edit view to save, preview and publish.' );
                e.preventDefault();
            } else {
                unbindWindowResize();
                makeSideInfoVisible();
                collapseIframe(contentIframe);
                collapseTable(contentTable);
                closeWritescreen();
                $this.text('Open Writescreen');
                e.preventDefault();
            }
        });
    }

    function openWritescreen() {
        postBodyContent.addClass('opened');
    }

    function expandTable(el) {
        el.css( 'height', '100%' );
    }

    function expandIframe(el) {
        var openedHeight = calculateOpenedHeight();

        el.css( 'height', openedHeight + 'px' );
    }

    function makeSideInfoHidden() {
        sideInfoColumn.css( 'visibility', 'hidden' );
    }

    function bindWindowResize(contentIframe) {
        $(window).bind( 'resize', function() {
            expandIframe(contentIframe);
        });
    }

    function unbindWindowResize() {
        $(window).unbind('resize');
    }

    function makeSideInfoVisible() {
        sideInfoColumn.css( 'visibility', 'visible' );
    }

    function collapseIframe(el) {
        el.css( 'height', '378px' );
    }

    function collapseTable(el) {
        el.css( 'height', '471px' );
    }

    function closeWritescreen() {
        postBodyContent.removeClass('opened');
    }

    function init() {
        buttonText = 'Open Writescreen';
        writescreenButton = '<div id="writescreen-button"><a class="button">' + buttonText + '</a></div>';
        buttonSelector = $('#writescreen-button .button');
        titleWrapInside = $('#titlewrap + .inside');
        postBodyContent = $('#post-body-content');
        sideInfoColumn = $('#side-info-column');
        
        insertButton();
    }

    $(window).load(function() {
        if ( postStuff.length == 1 ) {
            init();
        }
    });
}(jQuery));
