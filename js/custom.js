    $(document).ready(function() {
        $(".disable-click").click(function(e) {
            e.preventDefault();
        });

        $(".alert-ios-later").click(function() {
            alert("Chúng tôi đang cập nhật tính năng mới nha");
        });
          $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
    });