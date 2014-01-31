if (!window.leadvertex) window.leadvertex = {};
window.leadvertex.form = {};

window.leadvertex.form.label = function(field,name,form){
    if (!form) form = ''; else if (form<2) form = '';
    $(document).ready(function(){
        $('label[for=lv-form'+form+'-'+field +']').text(name);
    });
};
window.leadvertex.form.subLabel = function(field,text,form){
    if (!form) form = ''; else if (form<2) form = '';
    $(document).ready(function(){
        $('#lv-form'+form+' div.lv-row-'+field +'>.lv-field').after('<div class="lv-sub-label"><label for="lv-form'+form+'-'+field +'">'+text+'</label></div>');
    });
};

window.leadvertex.form.placeholder = function(field,placeholder,form){
    if (!form) form = ''; else if (form<2) form = '';
    $(document).ready(function(){
        $('#lv-form'+form+'-'+field).attr('placeholder',placeholder);
    });
};
window.leadvertex.form.placeholderOnly = function(form){
    if (!form) form = ''; else if (form<2) form = '';
    $(document).ready(function(){
        $('#lv-form'+form+' .lv-row.lv-row-input').each(function(i,e){
            $(e).find('.lv-label').hide();
            var $input = $(e).find('.lv-field > *');
            $input.attr('placeholder',$input.attr('data-label')+($input.attr('data-required') == '1' ? ' *' : ''));
        });
    });
};

window.leadvertex.form.validation = function($form, data, hasError) {
    if (hasError) {
        var errors = '';
        if ($form.attr('data-validation-by-alert')) {
            for (var i in data) errors+= data[i][0]+"\n\n";
            alert(errors);
        }
    }
    return true;
}
window.leadvertex.form.validationByAlert = function(form){
    if (!form) form = ''; else if (form<2) form = '';
    $(document).ready(function(){
        var $form = $('#lv-form'+form);
        $form.attr('data-validation-by-alert',1);
        $form.find('.lv-error').hide();
    });
}

$(document).ready(function(){
    $('.lv-move').each(function(i,e){
        var form = $(e).attr('data-form');
        if (!form) form = '';
        var position = $(e).attr('data-position').toString().toLowerCase();
        var field = $(e).attr('data-field').toString().toLowerCase();
        if (field == 'submit') field = 'div.lv-form-submit';
        else field = 'div.lv-row-'+field;
        var $element = $('#lv-form'+form+' '+field);
        if (position == 'before') $element.before($(e));
        else $element.after($(e));
    });
});