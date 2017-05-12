$(function() {
	<!-- �����б� -->
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
              {field : 'EName',title : '�û���',width : fixWidth(0.2),align : 'left',sortable:'true',editor : {type:'validatebox',options:{required:true}}},
              {field : 'EWork',title : 'ְҵ',width : fixWidth(0.2),align : 'left',sortable: true,editor : {type:'validatebox',options:{required:true}}},
              {field : 'EAge', title : '����', width : fixWidth(0.2),sortable: true},
              {field : 'id', title : 'id', width : fixWidth(0.2)}
    	    ] 
        ],
        sortName: "EName",  
        sortOrder: 'desc',  <!-- ====>����������ǰ������ filed������sortable:true -->
	remoteSort:false,
 
        toolbar: "#toolbar"
    });
    
    //������
/*    $("#searchbox").searchbox({ 
    	menu:"#mm", 
    	prompt :'ģ����ѯ',
    	searcher:function(value,name){   
    		var str="{\"searchName\":\""+name+"\",\"searchValue\":\""+value+"\"}";
    		var obj = eval('('+str+')');
    		$dg.datagrid('reload',obj); 
    	}
    
    });*/
    
    <!-- //������� -->
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
