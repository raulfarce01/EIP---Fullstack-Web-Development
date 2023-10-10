<form action="" method="POST" enctype="multipart/form-data">
    <div class="row mb-3">
        <label for="email" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="email" name="email">
        </div>
    </div>
    <div class="row mb-3">
        <label for="password" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="password" name="password">
        </div>
    </div>
    <div class="custom-file mb-2">
        <input type="file" class="custom-file-input" id="validatedCustomFile" name="imagen" required>
    </div>
    <button type="submit" class="btn btn-primary" name="submit">Login</button>
</form>