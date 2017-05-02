$(function() {
	<!-- 数据列表 -->
		entity_datagrid = $('#entity_datagrid').datagrid({
        url: ctx+"/MyAction/toList",
        width : 'auto',
		height :  $(this).height()-85,
		pagination:true,
		rownumbers:true,
		border:false,
		singleSelect:true,
		striped:true,
        columns : [ 
            [ 
              {field : 'EName',title : '用户名',width : fixWidth(0.2),align : 'left',sortable:'true',editor : {type:'validatebox',options:{required:true}}},
              {field : 'EWork',title : '职业',width : fixWidth(0.2),align : 'left',sortable: true,editor : {type:'validatebox',options:{required:true}}},
              {field : 'EAge', title : '年龄', width : fixWidth(0.2),sortable: true},
              {field : 'id', title : 'id', width : fixWidth(0.2)}
    	    ] 
        ],
        sortName: "EName",  
        sortOrder: 'desc',  <!-- ====>这三项用来前端排序 filed处设置sortable:true -->
	remoteSort:false,
 
        toolbar: "#toolbar"
    });
    
    //搜索框
/*    $("#searchbox").searchbox({ 
    	menu:"#mm", 
    	prompt :'模糊查询',
    	searcher:function(value,name){   
    		var str="{\"searchName\":\""+name+"\",\"searchValue\":\""+value+"\"}";
    		var obj = eval('('+str+')');
    		$dg.datagrid('reload',obj); 
    	}
    
    });*/
    
    <!-- //修正宽高 -->
	function fixHeight(percent)   
	{   
		return parseInt($(this).width() * percent);
		//return (document.body.clientHeight) * percent ;    
	}

	function sort2(a,b){
		return a.localeCompare(b)
	}
	
	function fixWidth(percent)   
	{   
		return parseInt(($(this).width() - 30) * percent);
		//return (document.body.clientWidth - 50) * percent ;    
	}
});
