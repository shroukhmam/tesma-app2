<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Tesma" />

    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> -->
    <link rel="stylesheet" href="{{URL::asset('assets/front/Bootstrap/static/css/bootstrap.min.css')}}">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{URL::asset('assets/front/css/animate.css')}}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />-->
    <link rel="stylesheet" href="{{URL::asset('assets/front/css/animate.css')}}">
    <link rel="stylesheet" href="{{URL::asset('assets/front/slick/slick.css')}}">
    <link href="{{URL::asset('assets/front/css/style.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/carousel.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/items.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/about.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/service.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/work.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/skill.css')}}" rel="stylesheet" />
    <link href="{{URL::asset('assets/front/css/team.css')}}" rel="stylesheet" />
     <link href="{{URL::asset('assets/front/css/contact.css')}}" rel="stylesheet" />
     <link href="{{URL::asset('assets/front/css/footer.css')}}" rel="stylesheet" />
     <link href="{{URL::asset('assets/front/css/downloadTop.css')}}" rel="stylesheet" />
     <link href="{{URL::asset('assets/front/css/servicePage.css')}}" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title> TESMA</title>
    <link rel="icon" type="images/x-icon" href="{{URL::asset('assets/front/image/7.png')}}" />

</head>


    <div id="root">
      
         @include('pages.front.layout.navbar')
         @include('pages.front.layout.slider')

         @include('pages.front.layout.about')
         @include('pages.front.layout.service')
         @include('pages.front.layout.contact')
         @include('pages.front.layout.footer')
       
    </div>

    <script src="{{URL::asset('assets/front/jQuery/jquery-3.4.1.min.js')}}"></script>
    <script src="{{URL::asset('assets/front/Bootstrap/static/js/popper.js')}}"></script>
    <script src="{{URL::asset('assets/front/Bootstrap/static/js/bootstrap.min.js')}}"></script>
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>
    <script src="{{URL::asset('assets/front/js/wow.min.js')}}"></script>
    <script>
    new WOW().init();
    </script>
    <script src="{{URL::asset('assets/front/js/script.js')}}"></script>
    <script src="{{URL::asset('assets/front/slick/slick.js')}}"></script>

</body>

</html>