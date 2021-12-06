function myFunction() {
   alert("GET TO KNOW ME!");
 }
function validate() {
  if( document.index.name.value == "" ) {
     alert( "Please provide your name!" );
     document.index.name.focus() ;
     return false;
  }
  if( document.index.email.value == "" ) {
      alert( "Please provide your email!" );
      document.index.email.focus() ;
      return false;
   }
   if( document.index.message.value == "" ) {
      alert( "Please write your Message first" );
      document.index.message.focus() ;
      return false;
   }
   else{
      alert("Message Submitted Successfully")
      return true ;
  }
}
