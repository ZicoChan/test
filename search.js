	$("#Ebutton").linkbutton({ iconCls: 'icon-search', plain: true })
    .click(function () {
/*    	var name = $("#EName").val().trim();
    	var work = $("#EWork").val().trim();
    	var age = $("#EAge").val().trim();*/
    	
    	var opts = $('#entity_datagrid').datagrid('options');
    	/*opts.queryParams ={'Ework':work};*/
    	var arr = toStringArray();
    	console.log("arr"+arr);
    	opts.queryParams = {'filterRules':arr};
    	opts.url= ctx+"/MyAction/toList/";
    	$('#entity_datagrid').datagrid('reload');
    });


	Iterator<myFilter> iterator = mfilter.iterator();
		StringBuffer sb = new StringBuffer();  
        sb.append("select a from ").append(tableSimpleName).append( " a where ");  
		while (iterator.hasNext()) {
			myFilter mf =(myFilter)iterator.next(); 
                sb.append("a.").append(mf.getField()).append("='").append(mf.getValue()).append("'");  
                if( iterator.hasNext()){
                	sb.append(" and ");  
                }
            }