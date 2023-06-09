const { DateTime } = require("luxon");
const BookInstance = require("../models/bookinstance");
const asyncHandler = require('express-async-handler')

// Display list of all BookInstances.
exports.bookinstance_list = asyncHandler(async(req, res, next) => {
    const allBookInstances = await BookInstance.find().populate("book").exec();

    res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: allBookInstances,
    });
});


exports.bookinstance_detail = async(req, res, next) => {
    const bookinstance = await BookInstance.findById(req.params.id).populate('book');

    if (bookinstance === null) {
        const err = new Error('Book copy not found');
        err.status = 404;
        return next(err);
    }

    const due_back_formatted = DateTime.fromJSDate(bookinstance.due_back).toLocaleString(DateTime.DATE_MED);

    res.render('bookinstance_detail', {
        title: 'Copy: ' + bookinstance.book.title,
        bookinstance,
        due_back_formatted
    });
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// Handle BookInstance create on POST.



// Display BookInstance create form on GET.
exports.bookinstance_create_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// Handle BookInstance create on POST.
exports.bookinstance_create_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
});

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// Display BookInstance update form on GET.
exports.bookinstance_update_get = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
});

// Handle bookinstance update on POST.
exports.bookinstance_update_post = asyncHandler(async(req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
});