function activateNavStatus(){

    $('.nav-sidebar-status-segment-1').addClass('nav-sidebar-status-segment-1-active'); 
    $('.nav-sidebar-status-segment-2').addClass('nav-sidebar-status-segment-2-active'); 
    $('.nav-sidebar-status-H-segment-1').addClass('nav-sidebar-status-H-segment-1-active'); 
    $('.nav-sidebar-status-H-segment-2').addClass('nav-sidebar-status-H-segment-2-active'); 

}

function deactivateNavStatus(){

    $('.nav-sidebar-status-segment-1').removeClass('nav-sidebar-status-segment-1-active'); 
    $('.nav-sidebar-status-segment-2').removeClass('nav-sidebar-status-segment-2-active'); 
    $('.nav-sidebar-status-H-segment-1').removeClass('nav-sidebar-status-H-segment-1-active'); 
    $('.nav-sidebar-status-H-segment-2').removeClass('nav-sidebar-status-H-segment-2-active'); 

}

function activateNavEndpoints(){

    $('.nav-endpoint-element').each(function(i) {
        $('.nav-endpoint-element').eq(i).addClass('nav-endpoint-element-active'); 
    });

    $('.nav-square').each(function(j) {
        $('.nav-square').eq(j).addClass('nav-square-active'); 
    });

}

function deactivateNavEndpoints(){

    $('.nav-endpoint-element').each(function(i) {
        $('.nav-endpoint-element').eq(i).removeClass('nav-endpoint-element-active'); 
    });

    $('.nav-square').each(function(j) {
        $('.nav-square').eq(j).removeClass('nav-square-active'); 
    });

}

function getCurrentSection(){

    var currentSectionIdx;

    $('.section').each(function(i){
        var isActive =  $('.section').eq(i).hasClass('section-active');
        if(isActive){
            currentSectionIdx = i;
        }
    });

    // console.log('currentSectionIdx: ' + currentSectionIdx);
    return currentSectionIdx;

}

function activateSectionDetails(sectionId, targetIdx){

    $('.comp-element-1').each(function(i){
        $('.comp-element-1').eq(i).removeClass('current-comp-element');
    });

    $('#' + sectionId).find('.top-eFrame').children('.comp-element-1').each(function(i){
        if(i == targetIdx){
            $('#' + sectionId).find('.top-eFrame').children('.comp-element-1').eq(i).addClass('current-comp-element');
        }
    });

    $('#' + sectionId).find('.bottom-eFrame').children('.comp-element-1').each(function(j){
        if(j == targetIdx){
            $('#' + sectionId).find('.bottom-eFrame').children('.comp-element-1').eq(j).addClass('current-comp-element');   
        }
    });

}

function deactivateSectionDetails(sectionId){

    $('#' + sectionId).find('.top-eFrame').children('.comp-element-1').each(function(i){
        $('#' + sectionId).find('.top-eFrame').children('.comp-element-1').eq(i).removeClass('current-comp-element');
    });

    $('#' + sectionId).find('.bottom-eFrame').children('.comp-element-1').each(function(j){
        $('#' + sectionId).find('.bottom-eFrame').children('.comp-element-1').eq(j).removeClass('current-comp-element');
    });

    $('.comp-element-1').each(function(i){
        $('.comp-element-1').eq(i).removeClass('current-comp-element');
    });

}

function activateSectionDetail(sectionId){

    var currentIdx = getCurrentSection();

    // console.log('currentIdx: ' + currentIdx);
    $('#' + sectionId).children('.section-comp-detail-panel').addClass('section-comp-detail-panel-active');

    activateSectionDetails(sectionId, currentIdx);

}

function deactivateSectionDetail(sectionId){

    $('#' + sectionId).children('.section-comp-detail-panel').removeClass('section-comp-detail-panel-active');

}

function activateSection(sectionId){

    $('#' + sectionId).addClass('section-active');
    $('#' + sectionId).children('.section-hdr').addClass('section-hdr-active'); 
    $('#' + sectionId).children('.section-nfo').addClass('section-nfo-active'); 
    $('#' + sectionId).find('.nfo-txt-item-group-t0').addClass('activeModeTxtItemGroup-t0');
    $('#' + sectionId).find('.nfo-txt-item-group-t1').addClass('activeModeTxtItemGroup-t1');
    $('#' + sectionId).find('.content-tile-t0').addClass('activeModeSelectionTile');
    $('#' + sectionId).find('.content-tile-t0B').addClass('activeModeSelectionTile-t0B');
    $('#' + sectionId).find('.content-tile-t0C').addClass('activeModeSelectionTile-t0C');
    $('#' + sectionId).find('.content-tile-t0D').addClass('activeModeSelectionTile-t0D');
    $('#' + sectionId).find('.content-tile-t1').addClass('activeModeSelectionTile-t1');
    $('#' + sectionId).find('.content-tile-t2').addClass('activeModeSelectionTile-t2');
    $('#' + sectionId).find('.content-tile-t3').addClass('activeModeSelectionTile-t3');
    $('#' + sectionId).find('.content-tile-t4').addClass('activeModeSelectionTile-t4');
    $('#' + sectionId).find('.content-tile-t5').addClass('activeModeSelectionTile-t5');
    $('#' + sectionId).find('.content-tile-t6').addClass('activeModeSelectionTile-t6');
    $('#' + sectionId).find('.section-selection-content-tile-dev-project').addClass('activeModeSelectionTile-dev-project');
    $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-1').addClass('activation-bar-segment-1-active');
    $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-2').addClass('activation-bar-segment-2-active');
    $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-3').addClass('activation-bar-segment-3-active');
    $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-4').addClass('activation-bar-segment-4-active');
    $('#' + sectionId).find('.ftr-flex').addClass('ftr-flex-active');
    $('#' + sectionId).find('.section-selection-content-tile-ftr').addClass('activeModeSelectionTile-ftr');
    $('#' + sectionId).find('.section-selection-content-tile-ftr-full').addClass('activeModeSelectionTile-ftr-full');
    
    setTimeout(function(){
        activateSectionDetail(sectionId);  
    }, 1000);

    setTimeout(function(){
        $('#' + sectionId).find('.section-nfo-txt-item').addClass('section-nfo-txt-item-active');  
    }, 2400);

}

function deactivateSection(sectionId){

    $('#' + sectionId).removeClass('section-active');

    setTimeout(function(){
        deactivateSectionDetail(sectionId);
        $('#' + sectionId).removeClass('section-active');
        $('#' + sectionId).children('.section-hdr').removeClass('section-hdr-active'); 
        $('#' + sectionId).children('.section-nfo').removeClass('section-nfo-active'); 
        $('#' + sectionId).find('.nfo-txt-item-group-t0').removeClass('activeModeTxtItemGroup-t0');
        $('#' + sectionId).find('.nfo-txt-item-group-t1').removeClass('activeModeTxtItemGroup-t1');
        $('#' + sectionId).find('.section-nfo-txt-item').removeClass('section-nfo-txt-item-active');
        $('#' + sectionId).find('.content-tile-t0').removeClass('activeModeSelectionTile');
        $('#' + sectionId).find('.content-tile-t0B').removeClass('activeModeSelectionTile-t0B');
        $('#' + sectionId).find('.content-tile-t0C').removeClass('activeModeSelectionTile-t0C');
        $('#' + sectionId).find('.content-tile-t0D').removeClass('activeModeSelectionTile-t0D');
        $('#' + sectionId).find('.content-tile-t1').removeClass('activeModeSelectionTile-t1');
        $('#' + sectionId).find('.content-tile-t2').removeClass('activeModeSelectionTile-t2');
        $('#' + sectionId).find('.content-tile-t3').removeClass('activeModeSelectionTile-t3');
        $('#' + sectionId).find('.content-tile-t4').removeClass('activeModeSelectionTile-t4');
        $('#' + sectionId).find('.content-tile-t5').removeClass('activeModeSelectionTile-t5');
        $('#' + sectionId).find('.content-tile-t6').removeClass('activeModeSelectionTile-t6');
        $('#' + sectionId).find('.section-selection-content-tile-dev-project').removeClass('activeModeSelectionTile-dev-project');
        $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-1').removeClass('activation-bar-segment-1-active');
        $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-2').removeClass('activation-bar-segment-2-active');
        $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-3').removeClass('activation-bar-segment-3-active');
        $('#' + sectionId).find(".section-selection-activation-bar").children('.activation-bar-segment-4').removeClass('activation-bar-segment-4-active');
        $('#' + sectionId).children('.section-comp-detail-panel').removeClass('section-comp-detail-1-active');   
        $('#' + sectionId).find('.ftr-flex').removeClass('ftr-flex-active');
        $('#' + sectionId).find('.section-selection-content-tile-ftr-full').removeClass('activeModeSelectionTile-ftr-full');
        $('#' + sectionId).find('.section-selection-content-tile-ftr').removeClass('activeModeSelectionTile-ftr');
    }, 250);

}

function sectionId(i){

    var sectionId =  $('.section').eq(i).attr('id');

    return sectionId;
    
}

function setSectionIdxValue(sectionId){

    $('.section').each(function(i) {
        var sectionIdCompValue = $('.section').eq(i).attr('id');
        var isSectionFound = sectionIdCompValue == sectionId;
        var idxValue;
        if(isSectionFound){
            // console.log('sectionIDX is this -> ' + i);
            $('.display-position-value').text(i);
        }
    });

}

function sectionScrollTop(sectionId){
    var sectionScrollTop = $('#' + sectionId).offset().top;
    return sectionScrollTop;
}

function sectionHeight(sectionId){
    var sectionHeight = $('#' + sectionId).height();
    return sectionHeight;
}

function sectionUpperBound(sectionScrollTop, upperBoundFactor){
    var sectionUpperBound = sectionScrollTop - upperBoundFactor;
    return sectionUpperBound;
}

function sectionLowerBound(sectionScrollTop, sectionHeight, lowerBoundFactor){
    var sectionLowerBound = sectionScrollTop + sectionHeight + lowerBoundFactor;
    return sectionLowerBound;
}

function upperBoundComparison(scrollValue, sectionUpperBound){
    var comparisonValueUpper = scrollValue >= sectionUpperBound;
    return comparisonValueUpper;
}

function lowerBoundComparison(scrollValue,sectionLowerBound){
    var comparisonValueLower = scrollValue <= sectionLowerBound;
    return comparisonValueLower;
}

function sectionIsActive(sectionId){
    var sectionIsActive = $('#' + sectionId).hasClass('section-active');
    return sectionIsActive;
}

function sectionIdx(sectionId){
    var sectionIdx = $('#' + sectionId).index('.section');
    return sectionIdx;
}

function nfoSectionIdx(sectionId){
    var nfoSectionIdx = $('#' + sectionId).index('.nfo-section');
    return nfoSectionIdx;
}

$(function(){
    timeMonitor();
});

function timeMonitor(){

    var dateValue = new Date();
    var yearValue = dateValue.getFullYear();
    var monthValue = dateValue.getMonth();
    var dayValue = dateValue.getDate();
    var hourValue = dateValue.getHours()
    var minutesValue = dateValue.getMinutes();
    var secondsValue = dateValue.getSeconds();
    var months = ["JAN. ", "FEB. ", "MAR. ", "APR. ", "MAY. ", "JUN. ", "JUL. ", "AUG. ", "SEP. ", "OCT. ", "NOV. ", "DEC. "];
    var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    // console.log('yearValue -> ' + yearValue)
    // console.log('monthValue -> ' + months[monthValue]);
    // console.log('dayValue -> ' + dayValue);
    // console.log('dayValue -> ' + dateValue);
    // console.log('hourValue -> ' + hourValue);
    // console.log('minutesValue -> ' + minutesValue);
    // console.log('secondsValue -> ' + secondsValue);

    var mdvValue = months[monthValue] + dayValue;
    var yrValue = yearValue;
    var hoursStr;

    if(hourValue < 10){
        hoursStr = "0" + hourValue;
    }else{
        hoursStr = hourValue;
    }

    var minutesStr;

    if(minutesValue < 10){
        minutesStr = "0" + minutesValue;
    }else{
        minutesStr = minutesValue;
    }

    var secondsStr;

    if(secondsValue < 10){
        secondsStr = "0" + secondsValue;
    }else{
        secondsStr = secondsValue;
    }

    var tmValue = hoursStr + ":" + minutesStr + ":" + secondsStr;

    $('.display-month-day-value').text(mdvValue);
    $('.display-year-value').text(yrValue);
    $('.display-current-time-value').text(tmValue);

    setTimeout(function(){
        timeMonitor();
    }, 1000);

}

function setHudDateInformation(){

    var dateValue = new Date();
    var yearValue = dateValue.getFullYear();
    var monthValue = dateValue.getMonth();
    var dayValue = dateValue.getDate();
    var hourValue = dateValue.getHours()
    var minutesValue = dateValue.getMinutes();
    var secondsValue = dateValue.getSeconds();

    var months = ["JAN. ", "FEB. ", "MAR. ", "APR. ", "MAY. ", "JUN. ", "JUL. ", "AUG. ", "SEP. ", "OCT. ", "NOV. ", "DEC. "];
    var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    // console.log('yearValue -> ' + yearValue)
    // console.log('monthValue -> ' + months[monthValue]);
    // console.log('dayValue -> ' + dayValue);
    // console.log('dayValue -> ' + dateValue);
    // console.log('hourValue -> ' + hourValue);
    // console.log('minutesValue -> ' + minutesValue);
    // console.log('secondsValue -> ' + secondsValue);

    var mdvValue = months[monthValue] + dayValue;
    var yrValue = yearValue;
    var hoursStr;

    if(hourValue < 10){
        hoursStr = "0" + hourValue;
    }else{
        hoursStr = hourValue;
    }

    var minutesStr;

    if(minutesValue < 10){
        minutesStr = "0" + minutesValue;
    }else{
        minutesStr = minutesValue;
    }

    var secondsStr;

    if(secondsValue < 10){
        secondsStr = "0" + secondsValue;
    }else{
        secondsStr = secondsValue;
    }

    var tmValue = hoursStr + ":" + minutesStr + ":" + secondsStr;

    $('.display-month-day-value').text(mdvValue);
    $('.display-year-value').text(yrValue);
    $('.display-current-time-value').text(tmValue);

}

function activateHudLockStatus(){
    
    $('.display-row-top-left').addClass('display-corner-top-active');
    $('.display-row-top-right').addClass('display-corner-top-active');
    $('.display-row-bottom-left').addClass('display-corner-bottom-active');
    $('.display-row-bottom-right').addClass('display-corner-bottom-active');
    $('.display-top-left-cross').addClass('display-top-left-cross-active');
    $('.display-top-right-cross').addClass('display-top-right-cross-active');
    $('.display-bottom-left-cross').addClass('display-bottom-left-cross-active');
    $('.display-bottom-right-cross').addClass('display-bottom-right-cross-active');

    $('.display-side-column').addClass('display-side-column-active');
    $('.display-side-element-left').addClass('display-side-element-active');
    $('.display-side-element-right').addClass('display-side-element-active');

    $('.display-row-top-center').addClass('display-row-top-center-active');
    $('.display-row-bottom-center').addClass('display-row-bottom-center-active');

    setHudDateInformation();

}

function deactivateHudLockStatus(){

    $('.display-row-top-left').removeClass('display-corner-top-active');
    $('.display-row-top-right').removeClass('display-corner-top-active');
    $('.display-row-bottom-left').removeClass('display-corner-bottom-active');
    $('.display-row-bottom-right').removeClass('display-corner-bottom-active');
    $('.display-top-left-cross').removeClass('display-top-left-cross-active');
    $('.display-top-right-cross').removeClass('display-top-right-cross-active');
    $('.display-bottom-left-cross').removeClass('display-bottom-left-cross-active');
    $('.display-bottom-right-cross').removeClass('display-bottom-right-cross-active');

    $('.display-side-column').removeClass('display-side-column-active');
    $('.display-side-element-left').removeClass('display-side-element-active');
    $('.display-side-element-right').removeClass('display-side-element-active');

    $('.display-row-top-center').removeClass('display-row-top-center-active');
    $('.display-row-bottom-center').removeClass('display-row-bottom-center-active');

}

function isolateCurrentSection(currentSection){

    $('.section').each(function(i) {

        var sectionId = $('.section').eq(i).attr('id');
        var isSectionCurrent = sectionId == currentSection;

        if(!isSectionCurrent){
            deactivateSection(sectionId);
        }

    });

}

function sectionChk(currentSection){

    // console.log('current section -> ' + currentSection);

    $('.display-current-section-value').text(currentSection);

    setSectionIdxValue(currentSection);

    isolateCurrentSection(currentSection);

    // console.log('isolated current section -> ' + currentSection);

    activateSection(currentSection);
    // console.log(currentSection + ' is activated.');

    $('.section').each(function(i) {

        var sectionId = $('.section').eq(i).attr('id');
        var isSectionCurrent = sectionId == currentSection;

        if(!isSectionCurrent){
            var hasActiveClass = sectionIsActive(sectionId);
            if(hasActiveClass){
                console.log('deactivating -> ' + sectionId);
            }
        }

    });

}

$(".nav-point-item-V, .nav-point-item-H, .nav-endpoint-element").hover(function(){

    var actualPosition = $('.position-display').text();
    console.log('actualPosition -> ' + actualposition);

    $('.position-holder').val(actualPosition);

    var hvrValue = $(this).attr('id');
    console.log('hvrValue -> ' + hvrValue);
    var hoverPosition = '';
    console.log('initial hoverPosition -> ' + hoverPosition);

    if(hvrValue == 'HDR' || hvrValue == 'Terminus'){
        hoverPosition = hoverPosition + hvrValue;
        console.log('final hoverPosition -> ' + hoverPosition);
    }else{

        var navIDX = hvrValue[hvrValue.length-1];
        console.log('navIDX -> ' + navIDX);
    
        var targetSection = sectionId(navIDX);
        console.log('targetSection -> ' + targetSection);

        var targetHoverPostionValue = $('#' + targetSection).find('.section-hdr').children('.section-position-value').text();
        console.log('targetSection -> ' + targetSection);

        hoverPosition = hoverPosition + targetHoverPostionValue;
        console.log('final hoverPosition -> ' + hoverPosition);

    }

    if(actualPosition == hoverPosition){
        $('.position-display').text(actualPosition);
    }else{
        $('.position-display').text(hoverPosition);
        $('.position-display').addClass('position-hover-value');
    }

}, function (actualposition, hoverPosition) {

    var actualValue = $('.position-holder').val();

    if(actualValue == hoverPosition){
        $('.position-display').text(actualValue);
    }else{
        $('.position-display').removeClass('position-hover-value');
        $('.position-display').text(actualValue);
    }

});

$(".nav-line-item").hover(function(){

    // console.log('trying to get... destination');

    $(this).find('.nav-point-destination').addClass('nav-point-destination-active');

}, function () {

    $(this).find('.nav-point-destination').removeClass('nav-point-destination-active');

});

$('.nav-line-item-V, .nav-line-item-H, .nav-endpoint-element').on('click',function(){

    $('.nav-point-item-H').each(function(i) {

        var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
        var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');

        if(isActive){
            $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
        }

    });

    $('.nav-point-item-V').each(function(j) {

        var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
        var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');

        if(isActive){
            $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
        }

    });

    var isSmlPointV = $(this).hasClass('nav-sml-point-V');
    var isHlfPointV = $(this).hasClass('nav-hlf-point-V');
    var isSmlPointH = $(this).hasClass('nav-sml-point-H');
    var isHlfPointH = $(this).hasClass('nav-hlf-point-H');

    if(isSmlPointV || isHlfPointV || isSmlPointH || isHlfPointH){

        $('.nav-point-item-H').each(function(k) {

            var hasPulse = $('.nav-point-item-H').eq(k).hasClass('main-nav-line-item-active-pulse');
            var isActive = $('.nav-point-item-H').eq(k).hasClass('nav-point-item-H-active');
    
            if(isActive){
                $('.nav-point-item-H').eq(k).removeClass('nav-point-item-H-active'); 
            }
    
        });
    
        $('.nav-point-item-V').each(function(l) {
    
            var hasPulse = $('.nav-point-item-V').eq(l).hasClass('main-nav-line-item-active-pulse');
            var isActive = $('.nav-point-item-V').eq(l).hasClass('nav-point-item-V-active');
    
            if(isActive){
                $('.nav-point-item-V').eq(l).removeClass('nav-point-item-V-active'); 
            }
    
        });

        console.log('this is a minor nav point...');

    }else{

        console.log('this is a major nav point...');

        var isNavPointV = $(this).hasClass('nav-point-item-V');
        var isNavPointH = $(this).hasClass('nav-point-item-H');
        var isEndPoint = $(this).hasClass('nav-endpoint-element');
        var thisName = $(this).attr('name');
        // console.log('thisName -> ' + thisName);

        if(isNavPointV){

            console.log('NavV nav point...');

            var idxValue = $(this).index('.nav-point-item-V');
            // console.log('idxValue -> ' + idxValue);

            $('.position-holder').text(thisName);

            $(this).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(idxValue).addClass('nav-point-item-H-active');

        }

        if(isNavPointH){

            console.log('NavH nav point...');

            var idxValue = $(this).index('.nav-point-item-H');
            // console.log('idxValue -> ' + idxValue);

            $(this).addClass('nav-point-item-H-active');
            $('.nav-point-item-V').eq(idxValue).addClass('nav-point-item-V-active');
            
        }

        if(isEndPoint){

            console.log('Nav endpoint...');

            var isVerticalNavEndPnt = $(this).hasClass('vEndpnt');
            // console.log('isVerticalNavEndPnt -> ' + isVerticalNavEndPnt);

            if(isVerticalNavEndPnt){
                $('.position-holder').text(thisName);
            }else{
                console.log('this is a endpoint in NavH');
            }
            
        }

    }

    activateNavStatus();

    setTimeout(function(){
        deactivateNavStatus();
    }, 400);

});

$(function(){
    pulseNavLineElement_V();
    pulseNavLineElement_H();
});

function pulseNavEndpoints(){

    activateNavEndpoints();

    setTimeout(function(){
        deactivateNavEndpoints();
    }, 400);

}

function pulseNavLineElement_V(){    

    $('.nav-line-item-V').each(function(i){

        pulseNavEndpoints();

        activateNavStatus();

        setTimeout(function(){
            deactivateNavStatus();
        }, 400);

        var thisNavLineElement = $(this);

        setTimeout(function(){

            var isSmlVPoint = thisNavLineElement.hasClass('nav-sml-point-V');
            var isHlfVPoint = thisNavLineElement.hasClass('nav-hlf-point-V');
            var isNavVPoint = thisNavLineElement.hasClass('nav-point-item-V');
            var isNavPointActive = thisNavLineElement.hasClass('nav-point-item-V-active');

            if(isSmlVPoint || isHlfVPoint){
                if(isSmlVPoint){
                    thisNavLineElement.addClass('pulse-minor-point-V-sml');
                }
                if(isHlfVPoint){
                    thisNavLineElement.addClass('pulse-minor-point-V-hlf');
                }
            }else{
                if(isNavPointActive){
                    console.log('this point is active');
                    thisNavLineElement.addClass('pulse-active-major-point-V');
                }else{
                    thisNavLineElement.addClass('pulse-major-point-V');
                }
            }

            setTimeout(function(){

                if(isSmlVPoint || isHlfVPoint){

                    if(isSmlVPoint){
                        thisNavLineElement.removeClass('pulse-minor-point-V-sml');
                    }

                    if(isHlfVPoint){
                        thisNavLineElement.removeClass('pulse-minor-point-V-hlf');
                    }

                }else{

                    if(isNavPointActive){
                        thisNavLineElement.removeClass('pulse-active-major-point-V');
                    }else{
                        thisNavLineElement.removeClass('pulse-major-point-V');
                    }
    
                }

                if(i == $('.nav-line-item-V').length-1) pulseNavLineElement_V();;

            }, 200);

        }, 200*i);

    });
}

function pulseNavLineElement_H(){    

    $('.nav-line-item-H').each(function(i){

        pulseNavEndpoints();

        activateNavStatus();

        setTimeout(function(){
            deactivateNavStatus();
        }, 800);

        var thisNavLineElement = $(this);

        setTimeout(function(){

            var isSmlHPoint = thisNavLineElement.hasClass('nav-sml-point-H');
            var isHlfHPoint = thisNavLineElement.hasClass('nav-hlf-point-H');
            var isNavHPoint = thisNavLineElement.hasClass('nav-point-item-H');
            var isNavPointActive = thisNavLineElement.hasClass('nav-point-item-H-active');

            if(isSmlHPoint || isHlfHPoint){

                if(isSmlHPoint){
                    thisNavLineElement.addClass('pulse-minor-point-H-sml');
                }

                if(isHlfHPoint){
                    thisNavLineElement.addClass('pulse-minor-point-H-hlf');
                }

            }else{

                if(isNavPointActive){
                    thisNavLineElement.addClass('pulse-active-major-point-H');
                }else{
                    thisNavLineElement.addClass('pulse-major-point-H');
                }

            }

            setTimeout(function(){

                if(isSmlHPoint || isHlfHPoint){
                    if(isSmlHPoint){
                        thisNavLineElement.removeClass('pulse-minor-point-H-sml');
                    }

                    if(isHlfHPoint){
                        thisNavLineElement.removeClass('pulse-minor-point-H-hlf');
                    }

                }else{

                    if(isNavPointActive){
                        thisNavLineElement.removeClass('pulse-active-major-point-H');
                    }else{
                        thisNavLineElement.removeClass('pulse-major-point-H');
                    }

                }

                if(i == $('.nav-line-item-H').length-1) pulseNavLineElement_H();;

            }, 200);

        }, 200*i);

    });
}

$('.buttonIcon').hover(function(){

    $(this).children('.buttonIcon-segment-type-2').children('.buttonIcon-segment-type-2a').toggleClass('buttonIcon-segment-type-2a-active');
    $(this).children('.buttonIcon-segment-type-2').children('.buttonIcon-segment-type-2b').toggleClass('buttonIcon-segment-type-2b-active');
   
});

$(window).scroll(function(i){

    var winScroll = $(this).scrollTop();

    $('.nav-scroll-value').text(winScroll);
    $('.display-scroll-value').text(winScroll);

    var upperBoundFactor = 175;
    var lowerBoundFactor = -100;
    var lowerBoundFactorFtr = -500;

    var sectionId_1 = sectionId(0);
    // console.log('sectionId_1 -> ' + sectionId_1);

    var sectionScrollTop_1 = sectionScrollTop(sectionId_1);
    var sectionHeight_1 = sectionHeight(sectionId_1);
    var sectionUpperBound_1 = sectionUpperBound(sectionScrollTop_1, upperBoundFactor);
    var sectionLowerBound_1 = sectionLowerBound(sectionScrollTop_1, sectionHeight_1, lowerBoundFactor);
    var upperBoundComparison_1 = upperBoundComparison(winScroll, sectionUpperBound_1);
    var lowerBoundComparison_1 = lowerBoundComparison(winScroll,sectionLowerBound_1);
    var sectionIdx_1 = sectionIdx(sectionId_1);
    var nfoSectionIdx_1 = nfoSectionIdx(sectionId_1);

    var sectionId_2 = sectionId(1);
    // console.log('sectionId_2 -> ' + sectionId_2);
    
    var sectionScrollTop_2 = sectionScrollTop(sectionId_2);
    var sectionHeight_2 = sectionHeight(sectionId_2);
    var sectionUpperBound_2 = sectionUpperBound(sectionScrollTop_2, upperBoundFactor);
    var sectionLowerBound_2 = sectionLowerBound(sectionScrollTop_2, sectionHeight_2, lowerBoundFactor);
    var upperBoundComparison_2 = upperBoundComparison(winScroll, sectionUpperBound_2);
    var lowerBoundComparison_2 = lowerBoundComparison(winScroll,sectionLowerBound_2);
    var sectionIdx_2 = sectionIdx(sectionId_2);
    var nfoSectionIdx_2 = nfoSectionIdx(sectionId_2);

    var sectionId_3 = sectionId(2);
    // console.log('sectionId_3 -> ' + sectionId_3);
    
    var sectionScrollTop_3 = sectionScrollTop(sectionId_3);
    var sectionHeight_3 = sectionHeight(sectionId_3);
    var sectionUpperBound_3 = sectionUpperBound(sectionScrollTop_3, upperBoundFactor);
    var sectionLowerBound_3 = sectionLowerBound(sectionScrollTop_3, sectionHeight_3, lowerBoundFactor);
    var upperBoundComparison_3 = upperBoundComparison(winScroll, sectionUpperBound_3);
    var lowerBoundComparison_3 = lowerBoundComparison(winScroll,sectionLowerBound_3);
    var sectionIdx_3 = sectionIdx(sectionId_3);
    var nfoSectionIdx_3 = nfoSectionIdx(sectionId_3);

    var sectionId_4 = sectionId(3);
    // console.log('sectionId_4 -> ' + sectionId_4);
    
    var sectionScrollTop_4 = sectionScrollTop(sectionId_4);
    var sectionHeight_4 = sectionHeight(sectionId_4);
    var sectionUpperBound_4 = sectionUpperBound(sectionScrollTop_4, upperBoundFactor);
    var sectionLowerBound_4 = sectionLowerBound(sectionScrollTop_4, sectionHeight_4, lowerBoundFactor);
    var upperBoundComparison_4 = upperBoundComparison(winScroll, sectionUpperBound_4);
    var lowerBoundComparison_4 = lowerBoundComparison(winScroll,sectionLowerBound_4);
    var sectionIdx_4 = sectionIdx(sectionId_4);
    var nfoSectionIdx_4 = nfoSectionIdx(sectionId_4);

    var sectionId_5 = sectionId(4);
    // console.log('sectionId_5 -> ' + sectionId_5);
    
    var sectionScrollTop_5 = sectionScrollTop(sectionId_5);
    var sectionHeight_5 = sectionHeight(sectionId_5);
    var sectionUpperBound_5 = sectionUpperBound(sectionScrollTop_5, upperBoundFactor);
    var sectionLowerBound_5 = sectionLowerBound(sectionScrollTop_5, sectionHeight_5, lowerBoundFactor);
    var upperBoundComparison_5 = upperBoundComparison(winScroll, sectionUpperBound_5);
    var lowerBoundComparison_5 = lowerBoundComparison(winScroll,sectionLowerBound_5);
    var sectionIdx_5 = sectionIdx(sectionId_5);
    var nfoSectionIdx_5 = nfoSectionIdx(sectionId_5);

    var sectionId_6 = sectionId(5);
    // console.log('sectionId_6 -> ' + sectionId_6);
    
    var sectionScrollTop_6 = sectionScrollTop(sectionId_6);
    var sectionHeight_6 = sectionHeight(sectionId_6);
    var sectionUpperBound_6 = sectionUpperBound(sectionScrollTop_6, upperBoundFactor);
    var sectionLowerBound_6 = sectionLowerBound(sectionScrollTop_6, sectionHeight_6, lowerBoundFactor);
    var upperBoundComparison_6 = upperBoundComparison(winScroll, sectionUpperBound_6);
    var lowerBoundComparison_6 = lowerBoundComparison(winScroll,sectionLowerBound_6);
    var sectionIdx_6 = sectionIdx(sectionId_6);
    var nfoSectionIdx_6 = nfoSectionIdx(sectionId_6);

    var sectionId_7 = sectionId(6);
    // console.log('sectionId_7 -> ' + sectionId_7);
    
    var sectionScrollTop_7 = sectionScrollTop(sectionId_7);
    var sectionHeight_7 = sectionHeight(sectionId_7);
    var sectionUpperBound_7 = sectionUpperBound(sectionScrollTop_7, upperBoundFactor);
    var sectionLowerBound_7 = sectionLowerBound(sectionScrollTop_7, sectionHeight_7, lowerBoundFactor);
    var upperBoundComparison_7 = upperBoundComparison(winScroll, sectionUpperBound_7);
    var lowerBoundComparison_7 = lowerBoundComparison(winScroll,sectionLowerBound_7);
    var sectionIdx_7 = sectionIdx(sectionId_7);
    var nfoSectionIdx_7 = nfoSectionIdx(sectionId_7);

    var sectionId_8 = sectionId(7);
    // console.log('sectionId_8 -> ' + sectionId_8);
    
    var sectionScrollTop_8 = sectionScrollTop(sectionId_8);
    var sectionHeight_8 = sectionHeight(sectionId_8);
    var sectionUpperBound_8 = sectionUpperBound(sectionScrollTop_8, upperBoundFactor);
    var sectionLowerBound_8 = sectionLowerBound(sectionScrollTop_8, sectionHeight_8, lowerBoundFactor);
    var upperBoundComparison_8 = upperBoundComparison(winScroll, sectionUpperBound_8);
    var lowerBoundComparison_8 = lowerBoundComparison(winScroll,sectionLowerBound_8); 
    var sectionIdx_8 = sectionIdx(sectionId_8);
    var nfoSectionIdx_8 = nfoSectionIdx(sectionId_8);

    var sectionId_9 = sectionId(8);
    // console.log('sectionId_9 -> ' + sectionId_9);
    
    var sectionScrollTop_9 = sectionScrollTop(sectionId_9);
    var sectionHeight_9 = sectionHeight(sectionId_9);
    var sectionUpperBound_9 = sectionUpperBound(sectionScrollTop_9, upperBoundFactor);
    var sectionLowerBound_9 = sectionLowerBound(sectionScrollTop_9, sectionHeight_9, lowerBoundFactor);
    var upperBoundComparison_9 = upperBoundComparison(winScroll, sectionUpperBound_9);
    var lowerBoundComparison_9 = lowerBoundComparison(winScroll,sectionLowerBound_9); 
    var sectionIdx_9 = sectionIdx(sectionId_9);
    var nfoSectionIdx_9 = nfoSectionIdx(sectionId_9);

    var sectionId_10 = sectionId(9);
    // console.log('sectionId_9 -> ' + sectionId_9);
    
    var sectionScrollTop_10 = sectionScrollTop(sectionId_10);
    var sectionHeight_10 = sectionHeight(sectionId_10);
    var sectionUpperBound_10 = sectionUpperBound(sectionScrollTop_10, upperBoundFactor);
    var sectionLowerBound_10 = sectionLowerBound(sectionScrollTop_10, sectionHeight_10, lowerBoundFactor);
    var upperBoundComparison_10 = upperBoundComparison(winScroll, sectionUpperBound_10);
    var lowerBoundComparison_10 = lowerBoundComparison(winScroll,sectionLowerBound_10); 
    var sectionIdx_10 = sectionIdx(sectionId_10);
    var nfoSectionIdx_10 = nfoSectionIdx(sectionId_10);

    var sectionId_11 = sectionId(10);
    // console.log('sectionId_9 -> ' + sectionId_9);
    
    var sectionScrollTop_11 = sectionScrollTop(sectionId_11);
    var sectionHeight_11 = sectionHeight(sectionId_11);
    var sectionUpperBound_11 = sectionUpperBound(sectionScrollTop_11, upperBoundFactor);
    var sectionLowerBound_11 = sectionLowerBound(sectionScrollTop_11, sectionHeight_11, lowerBoundFactorFtr);
    var upperBoundComparison_11 = upperBoundComparison(winScroll, sectionUpperBound_11);
    var lowerBoundComparison_11 = lowerBoundComparison(winScroll,sectionLowerBound_11); 
    var sectionIdx_11 = sectionIdx(sectionId_11);
    var nfoSectionIdx_11 = nfoSectionIdx(sectionId_11);

    

    var isTopOverlayHidden = $('.top-overlay').hasClass('hide');

    if(winScroll <= 95 || winScroll >= 8680){
        if(winScroll <= 95){
            $('.top-overlay').removeClass('hide');
        }
    }else{
        if(!isTopOverlayHidden){
            $('.top-overlay').addClass('hide');
        }
    }

    if(winScroll <= 200 || winScroll >= 10920){

        $('.nav-point-item-H').each(function(i) {
            $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
        });
    
        $('.nav-point-item-V').each(function(j) {
            $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
        });

        if(winScroll <= 200){
            var section_HDR = 'HDR';
            var section_HDR_active = $('.hdrEndpt').hasClass('nav-endpoint-element-active-selected');
            // console.log("hdr active sval - " + winScroll);
            $('.hdrEndpt').removeClass('nav-endpoint-element-active-selected');
            if(!section_HDR_active){
                $('.hdrEndpt').addClass('nav-endpoint-element-active-selected');
            }
            $('.position-holder').text(section_HDR);
            $('.position-display').text(section_HDR);
            $('.display-current-section-value').text(section_HDR);
        }

        if(winScroll >= 10920 || winScroll >= 11903){
            var section_FTR = 'Contact';
            var section_FTR_active = $('.ftrEndpt').hasClass('nav-endpoint-element-active-selected');
            // console.log("ftr active sval - " + winScroll);

            // if(!section_HDR_active){
            //     $('.ftrEndpt').addClass('nav-endpoint-element-active-selected');
            // }

            $('.hdrEndpt').removeClass('nav-endpoint-element-active-selected');
            $('.ftrEndpt').addClass('nav-endpoint-element-active-selected');
            
            $('.position-display').text(section_FTR);
            $('.display-current-section-value').text(section_FTR);
            
        }

    }else{

        $('.hdrEndpt').removeClass('nav-endpoint-element-active-selected');
        $('.ftrEndpt').removeClass('nav-endpoint-element-active-selected');

        // if(winScroll >= 200 || winScroll <= 9798){
        //     $('#HDR').removeClass('.nav-endpoint-element-active-selected');
        //     $('#FTR').removeClass('.nav-endpoint-element-active-selected');
        // }

    }

    var isParallaxFrameHolderForegroundHighZIndex = $('.parallax-frame-holder-foreground').hasClass('low-z-index');

    if(winScroll >= 1388){
        if(!isParallaxFrameHolderForegroundHighZIndex){
            $('.parallax-frame-holder-foreground').addClass('low-z-index');
        }
    }else{
        $('.parallax-frame-holder-foreground').removeClass('low-z-index');
    }

    var isDisplayContainerActive = $('#readout-display').hasClass('display-container-active');
    var isDisplayContainerActiveFtr = $('#ftr-display').hasClass('display-container-active');

    if(winScroll >= 1000 && winScroll <= 10920){
        if(!isDisplayContainerActive){
            $('#readout-display').addClass('display-container-active');
        }
        // $('.display-container').addClass('display-container-active');
    }else{
        $('#readout-display').removeClass('display-container-active');
    }


    // FTR scroll values 11736 and 12211

    if(winScroll >= 11736){
        if(!isDisplayContainerActiveFtr){
            $('#ftr-display').addClass('display-container-active');
            $('#ftr-display').addClass('ftr-display-active-index');
            $('.ftr-top-row').find(".section-selection-activation-bar").children('.activation-bar-segment-1').addClass('activation-bar-segment-1-active').addClass('ftr-activation-segment-ele');
            $('.ftr-top-row').find(".section-selection-activation-bar").children('.activation-bar-segment-2').addClass('activation-bar-segment-2-active').addClass('ftr-activation-segment');
            $('.ftr-bottom-row').find(".section-selection-activation-bar").children('.activation-bar-segment-3').addClass('activation-bar-segment-3-active').addClass('ftr-activation-segment');
            $('.ftr-bottom-row').find(".section-selection-activation-bar").children('.activation-bar-segment-4').addClass('activation-bar-segment-4-active').addClass('ftr-activation-segment-ele');
            $('.ftr-top-row').children('.section-comp-detail-panel').addClass('section-comp-detail-panel-active');
            $('.ftr-bottom-row').children('.section-comp-detail-panel').addClass('section-comp-detail-panel-active');
            
        }
    }else{
        $('#ftr-display').removeClass('display-container-active');
        $('#ftr-display').removeClass('ftr-display-active-index');
        $('.ftr-top-row').find(".section-selection-activation-bar").children('activation-bar-segment-1').removeClass('activation-bar-segment-1-active').removeClass('ftr-activation-segment-ele');
        $('.ftr-top-row').find(".section-selection-activation-bar").children('.activation-bar-segment-2').removeClass('activation-bar-segment-2-active').removeClass('ftr-activation-segment');
        $('.ftr-bottom-row').find(".section-selection-activation-bar").children('.activation-bar-segment-3').removeClass('activation-bar-segment-3-active').removeClass('ftr-activation-segment');
        $('.ftr-bottom-row').find(".section-selection-activation-bar").children('.activation-bar-segment-4').removeClass('activation-bar-segment-4-active').removeClass('ftr-activation-segment-ele');
        $('.ftr-top-row').children('.section-comp-detail-panel').removeClass('section-comp-detail-panel-active');
        $('.ftr-bottom-row').children('.section-comp-detail-panel').removeClass('section-comp-detail-panel-active');

    }

    // var isSectionLocked = (winScroll == 1089 || winScroll == 2209 || winScroll == 3329 || winScroll == 4449 || winScroll == 5569 || winScroll == 6689 || winScroll == 7809);
    // var isSectionLocked = (winScroll == 1888 || winScroll == 3008 || winScroll == 4128 || winScroll == 5248 || winScroll == 6368 || winScroll == 7488 || winScroll == 8608);
    var isSectionLocked = (winScroll == 1900 || winScroll == 3020 || winScroll == 4140 || winScroll == 5260 || winScroll == 6380 || winScroll == 7500 || winScroll == 8620 || winScroll == 9740 || winScroll == 10860);
    // console.log('isSectionLocked ->' + isSectionLocked);

    if(isSectionLocked){
        activateHudLockStatus();
    }else{
        deactivateHudLockStatus();
    }

    if(upperBoundComparison_1 && lowerBoundComparison_1){
        
        sectionChk(sectionId_1);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_1).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_1).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue1 = $('#' + sectionId_1).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_1 -> ' + sectionIdx_1);
        // console.log('nfoSectionIdx_1 -> ' + nfoSectionIdx_1);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

        }

        $('.position-display').text(sectionPositionValue1);
        $('.display-current-section-value').text(sectionPositionValue1);

    }

    if(upperBoundComparison_2 && lowerBoundComparison_2){

        sectionChk(sectionId_2);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_2).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_2).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue2 = $('#' + sectionId_2).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_2 -> ' + sectionIdx_2);
        // console.log('nfoSectionIdx_2 -> ' + nfoSectionIdx_2);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);
        // console.log('sectionPositionValue2 -> ' + sectionPositionValue2);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_2).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_2).addClass('nav-point-item-H-active');

        }

        $('#nli-1').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue2);

    }

    if(upperBoundComparison_3 && lowerBoundComparison_3){

        sectionChk(sectionId_3);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_3).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_3).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue3 = $('#' + sectionId_3).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_3 -> ' + sectionIdx_3);
        // console.log('nfoSectionIdx_3 -> ' + nfoSectionIdx_3);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_3).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_3).addClass('nav-point-item-H-active');

        }

        $('#nli-2').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue3);

    }

    if(upperBoundComparison_4 && lowerBoundComparison_4){

        sectionChk(sectionId_4);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_4).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_4).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue4 = $('#' + sectionId_4).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_4 -> ' + sectionIdx_4);
        // console.log('nfoSectionIdx_4 -> ' + nfoSectionIdx_4);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_4).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_4).addClass('nav-point-item-H-active');

        }
        
        $('#nli-3').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue4);

    }

    if(upperBoundComparison_5 && lowerBoundComparison_5){

        sectionChk(sectionId_5);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_5).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_5).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue5 = $('#' + sectionId_5).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_5 -> ' + sectionIdx_5);
        // console.log('nfoSectionIdx_5 -> ' + nfoSectionIdx_5);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_5).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_5).addClass('nav-point-item-H-active');

        }

        $('#nli-4').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue5);

    }


    if(upperBoundComparison_6 && lowerBoundComparison_6){

        sectionChk(sectionId_6);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_6).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_6).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue6 = $('#' + sectionId_6).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_6 -> ' + sectionIdx_6);
        // console.log('nfoSectionIdx_6 -> ' + nfoSectionIdx_6);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_6).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_6).addClass('nav-point-item-H-active');

        }

        $('#nli-5').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue6);
    }
 

    if(upperBoundComparison_7 && lowerBoundComparison_7){

        sectionChk(sectionId_7);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_7).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_7).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue7 = $('#' + sectionId_7).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_7 -> ' + sectionIdx_7);
        // console.log('nfoSectionIdx_7 -> ' + nfoSectionIdx_7);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
        
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
        
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_7).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_7).addClass('nav-point-item-H-active');

        }

        $('#nli-6').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue7);

    }

    if(upperBoundComparison_8 && lowerBoundComparison_8){

        sectionChk(sectionId_8);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_8).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_8).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue8 = $('#' + sectionId_8).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_8 -> ' + sectionIdx_8);
        // console.log('nfoSectionIdx_8 -> ' + nfoSectionIdx_8);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
        
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_8).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_8).addClass('nav-point-item-H-active');

        }

        $('#nli-7').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue8);
    }

    if(upperBoundComparison_9 && lowerBoundComparison_9){

        sectionChk(sectionId_9);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_9).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_9).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue9 = $('#' + sectionId_9).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_8 -> ' + sectionIdx_8);
        // console.log('nfoSectionIdx_8 -> ' + nfoSectionIdx_8);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
        
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_9).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_9).addClass('nav-point-item-H-active');

        }

        $('#nli-8').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue9);
    }


    var ftrCheck = winScroll >= 11736;

    if(upperBoundComparison_10 && !ftrCheck){

        sectionChk(sectionId_10);
        var isNavPointCorrectV = $('.nav-point-item-V').eq(nfoSectionIdx_9).hasClass('nav-point-item-V-active');
        var isNavPointCorrectH = $('.nav-point-item-H').eq(nfoSectionIdx_9).hasClass('nav-point-item-H-active');
        var isNavPointsCorrect = isNavPointCorrectV && isNavPointCorrectH;
        var sectionPositionValue10 = $('#' + sectionId_10).find('.section-hdr').children('.section-position-value').text();

        // console.log('sectionIdx_8 -> ' + sectionIdx_8);
        // console.log('nfoSectionIdx_8 -> ' + nfoSectionIdx_8);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(!isNavPointsCorrect){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
        
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });

            $('.nav-point-item-V').eq(nfoSectionIdx_10).addClass('nav-point-item-V-active');
            $('.nav-point-item-H').eq(nfoSectionIdx_10).addClass('nav-point-item-H-active');

        }

        $('#nli-9').addClass('main-nav-line-item-active');
        $('.position-display').text(sectionPositionValue10);
    }

    // if(upperBoundComparison_11  && lowerBoundComparison_11){

    //     sectionChk(sectionId_11);
    //     var isLastNavPointV_Activated = $('.nav-point-item-V').eq(nfoSectionIdx_11).hasClass('nav-point-item-V-active');
    //     var isLastNavPointH_Activated  = $('.nav-point-item-H').eq(nfoSectionIdx_11).hasClass('nav-point-item-H-active');
    //     var isLastNavPointActivated = isLastNavPointV_Activated && isLastNavPointH_Activated;
    //     var sectionPositionValue11 = $('#' + sectionId_11).find('.section-hdr').children('.section-position-value').text();
    //     console.log('sectionPositionValue11 -> ' + sectionPositionValue11);

    //     // console.log('sectionIdx_9 -> ' + sectionIdx_9);
    //     // console.log('nfoSectionIdx_9 -> ' + nfoSectionIdx_9);
    //     // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
    //     // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
    //     // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

    //     if(isLastNavPointActivated){

    //         $('.nav-point-item-H').each(function(i) {
    //             var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
    //             var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
    //             if(isActive){
    //                 $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
    //             }
    //         });
        
    //         $('.nav-point-item-V').each(function(j) {
    //             var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
    //             var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
    //             if(isActive){
    //                 $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
    //             }
    //         });
    //     }

    //     $('.position-display').text(sectionPositionValue11);
    //     $('.display-current-section-value').text(sectionPositionValue11);

    // }

    if(ftrCheck){

        sectionChk(sectionId_11);
        var isLastNavPointV_Activated = $('.nav-point-item-V').eq(nfoSectionIdx_11).hasClass('nav-point-item-V-active');
        var isLastNavPointH_Activated  = $('.nav-point-item-H').eq(nfoSectionIdx_11).hasClass('nav-point-item-H-active');
        var isLastNavPointActivated = isLastNavPointV_Activated && isLastNavPointH_Activated;
        var sectionPositionValue11 = $('#' + sectionId_11).find('.section-hdr').children('.section-position-value').text();
        console.log('sectionPositionValue11 -> ' + sectionPositionValue11);

        // console.log('sectionIdx_9 -> ' + sectionIdx_9);
        // console.log('nfoSectionIdx_9 -> ' + nfoSectionIdx_9);
        // console.log('isNavPointCorrectV -> ' + isNavPointCorrectV);
        // console.log('isNavPointCorrectH -> ' + isNavPointCorrectH);
        // console.log('isNavPointsCorrect -> ' + isNavPointsCorrect);

        if(isLastNavPointActivated){

            $('.nav-point-item-H').each(function(i) {
                var hasPulse = $('.nav-point-item-H').eq(i).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-H').eq(i).hasClass('nav-point-item-H-active');
                if(isActive){
                    $('.nav-point-item-H').eq(i).removeClass('nav-point-item-H-active'); 
                }
            });
        
            $('.nav-point-item-V').each(function(j) {
                var hasPulse = $('.nav-point-item-V').eq(j).hasClass('main-nav-line-item-active-pulse');
                var isActive = $('.nav-point-item-V').eq(j).hasClass('nav-point-item-V-active');
                if(isActive){
                    $('.nav-point-item-V').eq(j).removeClass('nav-point-item-V-active'); 
                }
            });
        }

        $('.position-display').text(sectionPositionValue11);
        $('.display-current-section-value').text(sectionPositionValue11);

    }

});