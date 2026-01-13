const config = {
    ajax: true,
    theme: 'html',
    iconlib: 'fontawesome5',
    use_name_attributes: false,
    disable_edit_json: true,
    disable_properties: true,
    disable_collapse: true,
    array_controls_top: true,
    enable_array_copy: true,
    
    show_errors: true,
    enforce_const: true,
    schema,
};

const editor = new JSONEditor(document.getElementById('editor-container'), config);

editor.on('change', function () {
    document.getElementById('input').value = JSON.stringify(editor.getValue());
});
