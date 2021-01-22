import React from "react";
import FileUploader from "../components/FileUploader";
import { Link } from "react-router-dom";

const ImportExport = () => {
    return (
        <div className="container mt-5 text-center">
            <h2 className="mb-4">
                Laravel 8 Import and Export CSV & Excel to Database Example
            </h2>

            <FileUploader name="file" api="/api/v1/file-import" />

            <Link
                to="/api/v1/file-export"
                className="btn btn-outline-primary btn-block"
                target="_blank"
                download
            >
                Export Data
            </Link>
        </div>
    );
};

export default ImportExport;
