function setNewBarchart(container,items) {


        items.forEach(item => {
        var e_bar_content = document.createElement("div");
        e_bar_content.classList.add("bar-content");

        if (item.label) {
            var e_tooltip = document.createElement("div");
            e_tooltip.classList.add("tooltip");

            var e_tooltip_content = document.createElement("div");
            e_tooltip_content.classList.add("tooltip-content");
            e_tooltip_content.textContent = item.label;

            var e_tooltip_arrow = document.createElement("div");

            e_tooltip_arrow.classList.add("arrow");
            e_tooltip_content.appendChild(e_tooltip_arrow);
            e_tooltip.appendChild(e_tooltip_content);
            e_bar_content.appendChild(e_tooltip);
        }

        var e_bar = document.createElement("div");
        e_bar.classList.add("bar");
        e_bar.classList.add("h" + item.value);

        var e_bar_footer = document.createElement("div");
        e_bar_footer.classList.add("bar-footer");

        var e_bar_footer_content = document.createElement("div");
        e_bar_footer_content.classList.add("bar-footer-content");
        e_bar_footer_content.innerHTML = "<h1>" + item.value + "</h1>";
        e_bar_footer.appendChild(e_bar_footer_content);

        e_bar_content.appendChild(e_bar);
        e_bar_content.appendChild(e_bar_footer);     
        container.appendChild(e_bar_content);

    });
    
}


function newChart(data, container) {
    
    var e_chart = document.createElement("div");
    e_chart.classList.add("chart");

    var e_chartType = document.createElement("div");
    var chartType = data.chart;
    e_chartType.classList.add(chartType);

    var chartStyle = data.style;
    if (chartStyle)
        chart.classList.add(chartStyle);    
        
    if (chartType == 'barchart' ) 
        setNewBarchart(e_chartType,data.data);

    e_chart.appendChild(e_chartType);
    container.appendChild(e_chart);


}
