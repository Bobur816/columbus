$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
      locale: {
        format: "DD.MM.YYYY", // Sanani DD.MM.YYYY formatida ko'rsatish
      },
      parentEl: ".datepicker-parrent",
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );
});
