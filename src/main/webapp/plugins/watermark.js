Draw.loadPlugin(function(ui) {
    // 自定义水印内容
    var name = '王双全';
    var code = 'No.001';
    var watermarkText = name + ' - ' + code;

    // 创建并插入水印 DOM 元素
    function addWatermark() {
        // 检查是否已存在
        if (document.getElementById('custom-watermark')) return;

        var wm = document.createElement('div');
        wm.id = 'custom-watermark';
        wm.innerText = watermarkText;

        Object.assign(wm.style, {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) rotate(-45deg)',
            fontSize: '24px',
            fontStyle: 'italic',
            color: 'rgba(0,0,0,0.05)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 10000,
            userSelect: 'none',
        });

        ui.container.appendChild(wm);
    }

    // 监听页面大小调整、主题切换、加载完成后添加水印
    ui.editor.graph.model.addListener(mxEvent.CHANGE, function() {
        setTimeout(addWatermark, 100);
    });

    ui.addListener('pageSelected', function() {
        setTimeout(addWatermark, 100);
    });

    ui.actions.addAction('addWatermark', addWatermark);
    addWatermark();
});