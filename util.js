const URL = "http://localhost:9513/ac-ms-blog-app/api";

function toastAlert(isValid, message) {

    if (!isValid) {

        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        toast({
            type: 'error',
            title: message
        })

    } else {

        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        toast({
            type: 'success',
            title: message
        })

    }

}

function modalError(message) {

    Swal.fire(
        'Oops...',
        message,
        'error'
    )

}