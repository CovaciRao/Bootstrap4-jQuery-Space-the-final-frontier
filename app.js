// import 'bootstrap';
// import 'bootstrap/js/src/carousel';

letterScanner( $('.logo'), 'O' )

function letterScanner( $el, letter ){
  $el.contents().each( function(){
    if( this.nodeType == 3 ){
      $( this ).replaceWith( this.textContent.replace( new RegExp( '('+letter+'+)', 'g' ), "<span style='font-weight: normal;'>$1</span>" ) );
    }else{
    	letterScanner( $( this ), letter )
    }
  } );
}

