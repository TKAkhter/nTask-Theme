<?php
/* Template Name: Template Verify Email */

get_header();

?>

<style>
.page-template-template-verify-email #header, .page-template-template-verify-email hr, .page-template-template-verify-email #footer  {
    display: none;
}

body, html, #root, #rootCnt {
    height: 100%;
    background: white;
    font-family: "Montserrat", "Helvetica", sans-serif;
    box-sizing: border-box;
    overflow: hidden;
}
.api_com, .page-template-template-verify-email #page {
    height: 100%;
}
.jss29 {
    height: 100%;
    overflow-y: auto;
}
.jss30 {
    width: 100%;
    height: 100%;
    display: table;
}
.jss31 {
    height: 100%;
    display: table-cell;
    padding: 60px 0;
    text-align: center;
    vertical-align: middle;
    background-size: contain, auto;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABVYAAACSCAYAAACueJEXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzREM0Q0UwRUE2OTExRThBNDVBRDgxODNGODI2RjlFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzREM0Q0UxRUE2OTExRThBNDVBRDgxODNGODI2RjlFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNEQzRDREVFQTY5MTFFOEE0NUFEODE4M0Y4MjZGOUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNEQzRDREZFQTY5MTFFOEE0NUFEODE4M0Y4MjZGOUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5eRiGkAAAjzElEQVR42u3d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),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyMAAABbCAYAAABgSlr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMUU5RTgyRUE2NjExRThCRTAzRTI2QkZFMDFEREVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUwMUU5RTgzRUE2NjExRThCRTAzRTI2QkZFMDFEREVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTAxRTlFODBFQTY2MTFFOEJFMDNFMjZCRkUwMURERUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTAxRTlFODFFQTY2MTFFOEJFMDNFMjZCRkUwMURERUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4euZURAAAG2klEQVR42u3d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);
    background-repeat: no-repeat;
    background-position: bottom, center 20%;
}
.jss32 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;


}
.jss33 {
    width: 40%;
    margin: 0 auto;
    padding: 30px 60px;
    display: flex;
    max-width: 370px;
    background: rgba(255, 255, 255, 1);
    flex-direction: column;
}
.jss139 {
    color: #fff;
    padding: 10px 30px;
    font-size: 16px;
    background: #00be86;
    box-shadow: none;
    font-weight: 500;
    border-radius: 4px;
    text-transform: capitalize;
    width: auto;
    margin: 0 auto;
    text-decoration: none;
    margin-top: 40px;
}
.jss182 {
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
}
.jss71 {
    box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);
}
.jss68 {
    border-radius: 4px;
}
.jss106 {
    color: rgba(51, 51, 51, 1);
    font-size: 24px;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    font-weight: 600;
    line-height: normal;
}
.jss102 {
    color: rgba(126, 126, 126, 1);
    font-size: 12px;
    font-family: 'Montserrat', 'Helvetica', sans-serif;
    font-weight: 500;
    line-height: 1.5;
}
.jss94 {
    margin: 0;
    display: block;
}
.jss117 {
    text-align: center;
}
.jss55 img {
    width: 30%;
    margin-bottom: 16px;
}
.jss56 {
    margin-bottom: 16px;
}
</style>
 <section class="api_com">
        <div id="rootCnt">
            <div id="root">
                <div class="jss29">
                    <div class="jss30">
                        <div class="jss31">
                            <div class="jss32" style="margin-left: auto;margin-right: auto;">
                                <a href="<?php echo site_url(); ?>">
                                    <img width="255" height="75" src="<?php echo get_template_directory_uri() ?>/assets/extras/nTask_Logo_06.svg">
                                </a>
                            </div>
                            <div class="jss67 jss33 jss71 jss68">
                                <h2 class="jss94 jss107 jss117" style="margin-bottom: 10px;line-height: normal;"></h2>
                                <div class="jss55">
                                    <img width="110" height="110" src="<?php echo get_template_directory_uri() ?>/assets/extras/illustration_Email.svg">
                                    <h1 class="jss94 jss106 jss56">You've got mail!</h1>
                                    <p class="jss94 jss102 jss117">You've been successfully registered if you weren't before please check your email to complete the signup.
                                    </p><br>
                                    <p class="jss94 jss102 jss117">Check your spam / junk folder if you don't see the
                                        email in your inbox.</p><br>
                                        <p class="jss94 jss102 jss117">If you already have an account please login

                                        </p>
                                </div><a class="jss207 jss181 jss192 jss139 jss195" href="https://app.ntaskmanager.com/account/login">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>